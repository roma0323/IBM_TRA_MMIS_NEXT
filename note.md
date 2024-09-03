後端ＡＰＩ重寫 

車種層級分析：各車型比例 數量 使用率
/Users/ray/Documents/code_file/ibm_tra_mmis_next/src/components/train_deployment/detail_page/ClientPage.tsx
const data = [
{ name: '太魯閣 - TEMU1000', value: 100 ,use_rate:23},
{ name: '普悠瑪 - TEMU2000', value: 100 ,use_rate:45},
{ name: '新自強號 - MEU3000', value: 150,use_rate:12 },
{ name: 'PP 電力機車 - E1000', value: 90 ,use_rate:48},
];

車種層級分析：30 使用率（包含前 30~60 天）（包含非常態車輛 動力車）
const using_rate_data = [
{ name: '1 號', 本月: 45, 上個月: 50 },
{ name: '2 號', 本月: 30, 上個月: 32 },
{ name: '3 號', 本月: 35, 上個月: 44 },
{ name: '4 號', 本月: 34, 上個月: 39 },
{ name: '5 號', 本月: 31, 上個月: 44 },
{ name: '6 號', 本月: 47, 上個月: 52 },
{ name: '7 號', 本月: 34, 上個月: 34 },
{ name: '8 號', 本月: 39, 上個月: 44 },
{ name: '9 號', 本月: 31, 上個月: 36 },
{ name: '10 號', 本月: 50, 上個月: 55 },
{ name: '11 號', 本月: 48, 上個月: 33 },
{ name: '12 號', 本月: 32, 上個月: 37 },
{ name: '13 號', 本月: 45, 上個月: 30 },
{ name: '14 號', 本月: 43, 上個月: 48 },
{ name: '15 號', 本月: 42, 上個月: 47 },
{ name: '16 號', 本月: 44, 上個月: 39 },
{ name: '17 號', 本月: 44, 上個月: 49 },
{ name: '18 號', 本月: 33, 上個月: 38 },
{ name: '19 號', 本月: 36, 上個月: 31 },
{ name: '20 號', 本月: 46, 上個月: 31 },
{ name: '21 號', 本月: 45, 上個月: 50 },
{ name: '22 號', 本月: 32, 上個月: 57 },
{ name: '23 號', 本月: 46, 上個月: 51 },
{ name: '24 號', 本月: 44, 上個月: 49 },
{ name: '25 號', 本月: 32, 上個月: 37 },
{ name: '26 號', 本月: 47, 上個月: 52 },
{ name: '27 號', 本月: 44, 上個月: 49 },
{ name: '28 號', 本月: 38, 上個月: 43 },
{ name: '29 號', 本月: 36, 上個月: 41 },
{ name: '30 號', 本月: 34, 上個月: 40 }
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
}

Next.js tips:
        use context for passing value through deep layer
        fetch same data different place(autually only fetch once)
        use promise : if fetch two source seqenail  would cause waterfall
        suspense  :
                - suspense must one layer higher then it work
                - with key={searchParams}
                - 以連結到的那層往上看一層有沒有suspense  （往下看尚未實驗）
                - export default function Page() {return (<Suspense fallback={<div>Loading...</div>}></Suspense>);}
                
CSS & UI tips:
        css devide-y-2 or space-y-2 replace margin bottom
        cn()  to resue the board title
Other: board overflow :
        h-64 size-full


8/27週進度：
                改善用戶體驗
                        - RWD
                        - loading page
                程式重構
                        - type reuse
                        - component reuse
                        - refactor some components to server component
                        - color align
                新增功能
                        - date function deoplyment detail /depot
                        - 機廠檢修清單

討論：
A級故障 是否有其他單位？ 若有,單位在ＡＰＩ哪裡
ＡＴＰ圖表不需按照月份變更？ ＡＰＴ故障次數不一致

