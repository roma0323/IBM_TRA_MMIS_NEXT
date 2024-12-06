後端ＡＰＩ重寫 

ＡＴＰ圖表需按照月份變更

http://tra.webtw.xyz:8888/maximo/zz_data?method=getInvMountList&year=${yearString}&month=${month}&dept=${dept}&type=${type}`,
1.新增percentage 
2.整合sum_invbal_mount,sum_issue_mount & curbal,quantity
export type InventoryListBalance = {
  itemnum: string;
  conditioncode: string;
  unitprice: string;
  dept: string;
  month: string;
  year: string;
  unit: string;
  itemdesc: string;
  sum_invbal_mount: string;
  curbal: string;
};

export type InventoryListIssue = {
  itemnum: string;
  conditioncode: string;
  unitprice: string;
  dept: string;
  month: string;
  year: string;
  unit: string;
  itemdesc: string;
  sum_issue_mount: string;
  quantity: string;
};

----------------------------------
暫緩：
annual static dploy sometime error , dont know why so far
annual report  error first time  , cannot read forEach
小數點兩位
機廠檢修總覽原本有缺項目（？） 工作單號是否是依據
機場配置->在場車
非常態 動力車rwd
Table sticky
cannot sort can click datatable
---------------------

done:
F P加起來 貨車
L動力車
guse flag = 0 非常態
加入30天使用率標籤
車種細節直接用
總量數 beloingto  可用數 current 三個加起來
accordino number label
機場維修 不要hover才顯示
card 總數量
圖表分太開
車種分類要有總數
機廠檢修清單：

延遲 正的才有顏
label改成中文 件數改成平均
日其功能排序
default value
年度講清楚
1.新增percentage 
2.整合sum_invbal_mount,sum_issue_mount & curbal,quantity
數量金額排序功能
hover chart label 千分位逗號
動力連續定額(HP) 就空白就好
---------------------

undone:




營運燈號：點選label要有
只顯示一個 紅色優先 隨便選
label 寫出來 不可營運 可營運
每1分鐘刷新



討論：
可否不放貨車 貨車細節數量不對
