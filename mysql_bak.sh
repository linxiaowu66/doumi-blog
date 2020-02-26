#!/bin/bash
PATH=/bin:/sbin:/usr/bin:/usr/sbin:/usr/local/bin:/usr/local/sbin
export PATH
export LC_ALL=en_US.UTF-8
export LANG=en_US.UTF-8
export LANGUAGE=en_US.UTF-8

#数据库ip
DBHOST='127.0.0.1'
#数据库用户名
DBUSER='dev'
#数据库用密码
DBPASSWD='123456'
#需要备份的数据库，多个数据库用空格分开
DBNAME='douMiBlog'

#备份时间
backtime=`date +%Y-%m-%d_%H%M%S`
#备份路径（当前目录）
BACKPATH=$(dirname $(readlink -f $0))
echo $BACKPATH
#日志备份路径
LOGPATH="${BACKPATH}/log"
#数据备份路径
DBPATH="${BACKPATH}/db"

#创建备份目录
[ ! -d "${LOGPATH}" ] && mkdir -p "${LOGPATH}"
[ ! -d "${DBPATH}" ] && mkdir -p "${DBPATH}"

#日志记录头部
echo "备份时间为${backtime},备份数据库表 ${DBNAME} 开始" >> ${LOGPATH}/mysqlback.log

#正式备份数据库
for table in $DBNAME; do
source=`mysqldump -u ${DBUSER} -h${DBHOST} -p${DBPASSWD} ${table}> ${LOGPATH}/${backtime}.sql` 2>> ${LOGPATH}/mysqlback.log;

#备份成功以下操作 $?获取上一个命令的操作结果，0代表成功
ret=$?
if [ $ret -eq 0 ];then
cd ${LOGPATH}
#为节约硬盘空间，将数据库压缩
tar -czf ${DBPATH}/${table}${backtime}.tar.gz ./${backtime}.sql > /dev/null
#删除原始文件，只留压缩后文件
rm -f ${LOGPATH}/${backtime}.sql
#删除七天前备份，也就是只保存7天内的备份
find $DBPATH -name "*.tar.gz" -type f -mtime +7 -exec rm -rf {} \; > /dev/null 2>&1
echo "数据库表 ${DBNAME} 备份成功!!" >> ${LOGPATH}/mysqlback.log
else
#备份失败则进行以下操作
echo "数据库表 ${DBNAME} 备份失败!!" >> ${LOGPATH}/mysqlback.log
fi
done
