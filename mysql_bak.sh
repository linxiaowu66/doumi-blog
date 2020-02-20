#!/bin/bash
PATH=/bin:/sbin:/usr/bin:/usr/sbin:/usr/local/bin:/usr/local/sbin
export PATH

#数据库ip
DBHOST='127.0.0.1' // your db host
#数据库用户名
DBUSER='dev' // 数据库用户名
#数据库用密码
DBPASSWD='123456' // 数据库用户名对应的密码
#需要备份的数据库，多个数据库用空格分开
DBNAME='douMiBlog' // 数据库名

#备份时间
backtime=`date +%Y-%m-%d_%H%M%S`
#备份路径（当前目录）
BACKPATH=$(dirname $(readlink -f $0))
echo $BACKPATH
#日志备份路径
LOGPATH="${BACKPATH***REMOVED***/log"
#数据备份路径
DBPATH="${BACKPATH***REMOVED***/db"

#创建备份目录
[ ! -d "${LOGPATH***REMOVED***" ] && mkdir -p "${LOGPATH***REMOVED***"
[ ! -d "${DBPATH***REMOVED***" ] && mkdir -p "${DBPATH***REMOVED***"

#日志记录头部
echo "备份时间为${backtime***REMOVED***,备份数据库表 ${DBNAME***REMOVED*** 开始" >> ${LOGPATH***REMOVED***/mysqlback.log

#正式备份数据库
for table in $DBNAME; do
source=`mysqldump -u ${DBUSER***REMOVED*** -h${DBHOST***REMOVED*** -p${DBPASSWD***REMOVED*** ${table***REMOVED***> ${LOGPATH***REMOVED***/${backtime***REMOVED***.sql` 2>> ${LOGPATH***REMOVED***/mysqlback.log;

#备份成功以下操作 $?获取上一个命令的操作结果，0代表成功
if [ "$?" == 0 ];then
cd ${LOGPATH***REMOVED***
#为节约硬盘空间，将数据库压缩
tar -czf ${DBPATH***REMOVED***/${table***REMOVED***${backtime***REMOVED***.tar.gz ./${backtime***REMOVED***.sql > /dev/null
#删除原始文件，只留压缩后文件
rm -f ${LOGPATH***REMOVED***/${backtime***REMOVED***.sql
#删除七天前备份，也就是只保存7天内的备份
find $DBPATH -name "*.tar.gz" -type f -mtime +7 -exec rm -rf {***REMOVED*** \; > /dev/null 2>&1
echo "数据库表 ${DBNAME***REMOVED*** 备份成功!!" >> ${LOGPATH***REMOVED***/mysqlback.log
else
#备份失败则进行以下操作
echo "数据库表 ${DBNAME***REMOVED*** 备份失败!!" >> ${LOGPATH***REMOVED***/mysqlback.log
fi
done
