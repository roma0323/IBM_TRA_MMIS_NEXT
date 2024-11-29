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
可否不放貨車 貨車細節數量不對
機務段數量是配置數還是有幾行
動力連續定額(HP) ?????
annual static dploy sometime error , dont know why so far
小數點兩位
機場配置->在場車


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

---------------------

undone:
機廠檢修清單：

車種分類要有總數
延遲 正的才有顏色


日其功能排序

report:
annual report  error first time  , cannot read forEach
千分位分號
當月改成個月份 label改成中文
件數改成平均
default value
百分比%
年度講清楚

1.新增percentage 
2.整合sum_invbal_mount,sum_issue_mount & curbal,quantity
數量金額排序功能
hover chart label 千分位逗號
動力連續定額(HP) 就空白就好



營運燈號：點選label要有
只顯示一個 紅色優先 隨便選
營運燈號 要很紅 刺眼 燈號 加粗字體
label 寫出來 不可營運 可營運
每1分鐘刷新


