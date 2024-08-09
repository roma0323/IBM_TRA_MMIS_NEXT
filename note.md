後端ＡＰＩ重寫

車種層級分析：各車型比例 數量 使用率
const data = [
  { name: '太魯閣 - TEMU1000', value: 100 ,use_rate:23},
  { name: '普悠瑪 - TEMU2000', value: 100 ,use_rate:45},
  { name: '新自強號 - MEU3000', value: 150,use_rate:12 },
  { name: 'PP電力機車 - E1000', value: 90 ,use_rate:48},
];
車種層級分析：30使用率（包含前30~60天）（包含非常態車輛 動力車）
const using_rate_data = [
  { name: '1號', 本月: 45, 上個月: 50 },
  { name: '2號', 本月: 30, 上個月: 32 },
  { name: '3號', 本月: 35, 上個月: 44 },
  { name: '4號', 本月: 34, 上個月: 39 },
  { name: '5號', 本月: 31, 上個月: 44 },
  { name: '6號', 本月: 47, 上個月: 52 },
  { name: '7號', 本月: 34, 上個月: 34 },
  { name: '8號', 本月: 39, 上個月: 44 },
  { name: '9號', 本月: 31, 上個月: 36 },
  { name: '10號', 本月: 50, 上個月: 55 },
  { name: '11號', 本月: 48, 上個月: 33 },
  { name: '12號', 本月: 32, 上個月: 37 },
  { name: '13號', 本月: 45, 上個月: 30 },
  { name: '14號', 本月: 43, 上個月: 48 },
  { name: '15號', 本月: 42, 上個月: 47 },
  { name: '16號', 本月: 44, 上個月: 39 },
  { name: '17號', 本月: 44, 上個月: 49 },
  { name: '18號', 本月: 33, 上個月: 38 },
  { name: '19號', 本月: 36, 上個月: 31 },
  { name: '20號', 本月: 46, 上個月: 31 },
  { name: '21號', 本月: 45, 上個月: 50 },
  { name: '22號', 本月: 32, 上個月: 57 },
  { name: '23號', 本月: 46, 上個月: 51 },
  { name: '24號', 本月: 44, 上個月: 49 },
  { name: '25號', 本月: 32, 上個月: 37 },
  { name: '26號', 本月: 47, 上個月: 52 },
  { name: '27號', 本月: 44, 上個月: 49 },
  { name: '28號', 本月: 38, 上個月: 43 },
  { name: '29號', 本月: 36, 上個月: 41 },
  { name: '30號', 本月: 34, 上個月: 40 }
];

http://tra.webtw.xyz:8888/maximo/zz_data?method=getSumStatusList&qdate=2024-08-05&sumtotal=1
非常態 動力車
{
            "index": 7,
            "dept": "total",
            "deptdesc": "total",
            "cartype": "total",
            "carcatalog": "通勤列車",
            "belongto": 1160.0,
            "borrowin": 0.0,
            "borrowout": 0.0,
            "current_cnt": 1160.0,
            "current_use": 0.0,
            "current_temp": 0.0,
            "current_ready": 991.0,
            "maintain_w": 22.0,
            "maintain_sec": 34.0,
            "maintain_fac": 32.0,
            "oth_waitrep": 26.0,
            "oth_return": 14.0,
            "oth_stop": 4.0,
            "availability": 0.8543103448275862
        },

TrainByRow沒有區分常態非常態        
http://tra.webtw.xyz:8888/maximo/zz_data?method=getSumStatusList&multiplier=0&dept=&qdate=2024-08-04
{
            "index": 0,
            "dept": "MYY00",
            "deptdesc": "花蓮機務段",
            "cartype": "R190",
            "carcatalog": "柴電機車",
            "belongto": 6.0,
            "borrowin": 0.0,
            "borrowout": 0.0,
            "current_cnt": 6.0,
            "current_use": 0.0,
            "current_temp": 0.0,
            "current_ready": 6.0,
            "maintain_w": 0.0,
            "maintain_sec": 0.0,
            "maintain_fac": 0.0,
            "oth_waitrep": 0.0,
            "oth_return": 0.0,
            "oth_stop": 0.0,
            "availability": 1.0
        },

維修詳情沒有區分常態非常態
http://192.168.36.21/maximo/zz_data?method=getSumStatusDetailList&dept=MGY00&cartype=PC&qtype=maintain_sec&qdate=2024-08-08
{        "dept": "MGY00",
        "deptdesc": "七堵機務段",
        "cartype": "35PPH1300",
        "assetnum": "35PPH1316",
        "worktype": "",
        "actstart": "2024/03/20",
        "actfinish": "",
        "type": "62",
        "typedesc": "在段試駛",
        "borrowdept": "",
        "statementdesc": "",
        "statement": "試車",
        "current_use_type": "",
        "current_use_typedesc": "",
        "url": ""
    },

改善：
rowbytrain 是否全部都可以點
