#!/bin/sh

DUMP=/usr/bin/mongodump #mongodump备份文件执行路径

OUT_DIR=/home/backup/mongod_bak/mongod_bak_now #临时备份目录

TAR_DIR=/home/backup/mongod_bak/mongod_bak_list #备份存放路径

DATE=`date +%Y_%m_%d` #获取当前系统时间

DB_USER= #数据库账号

DB_PASS= #数据库密码

DAYS=7 #DAYS=7代表删除7天前的备份，即只保留最近7天的备份

TAR_BAK="mongod_bak_$DATE.tar.gz" #最终保存的数据库备份文件名

cd $OUT_DIR

rm -rf $OUT_DIR/*

mkdir -p $OUT_DIR/$DATE

$DUMP -h localhost -o $OUT_DIR/$DATE #备份全部数据库,没有密码和用户名

tar -zcvf $TAR_DIR/$TAR_BAK $OUT_DIR/$DATE #压缩为.tar.gz格式

find $TAR_DIR/ -mtime +$DAYS -delete #删除7天前的备份文件

# Then you add this line "30 1    * * *   root    /home/mongoDB/mongod_bak.sh" to the /etc/crontab file and restart cron servive
