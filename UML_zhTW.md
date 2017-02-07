# UML diagram

UML diagram

```uml
@startuml

  Class Metadata {
    +名稱:自由文字
    +網址:自由文字
    +識別碼:自由文字
    +資料類型:資料類型
    +所屬子計畫:子計畫代碼
    +摘要:自由文字
    +組織:自由文字
    +語言:語言類型
    +編碼:編碼類型
    +時間解析度:時間解析度類型
    +起始時間:W3C_NOTE-datetime
    +結束時間:W3C_NOTE-datetime
    +時間區間捷徑:時間區間捷徑類型
    +作者:自由文字
    +作者電子信箱:自由文字
    +作者聯絡電話:自由文字
    +維護者:自由文字
    +維護者電子信箱:自由文字
    +維護者聯絡電話:自由文字
    +主題關鍵字:自由文字
    +空間範圍關鍵字:自由文字
    +空間範圍:GeoJSON
    +空間範圍.x.min:Angle
    +空間範圍.x.max:Angle
    +空間範圍.y.min:Angle
    +空間範圍.y.max:Angle
    +主題類型:主題類型
    +格式:自由文字
    +資料使用限制:自由文字
    +參考來源:自由文字
    +標籤:自由文字
    +資料建置時間:自由文字
  }
  Class 文獻書籍 {
    +國際標準書號 ISBN:自由文字
    +國際標準期刊號 ISSN:自由文字
    +期刊:自由文字
    +卷期:自由文字
    +論文集名稱:自由文字
    +出版地:自由文字
    +出版社:自由文字
    +出版年:Year
    +書目查詢:自由文字
    +原文網址:自由文字
    +使用史料:使用史料類型
    +研究區的聚落名:自由文字
    +研究區的宗教:自由文字
    +研究區的家族:自由文字
    +研究區的埤圳:自由文字
    +研究區的特殊產業:自由文字
    +備註:自由文字
  }

  Class SpatialMetadata {
    +坐標參考系統:自由文字
    +空間解析度:Real
    +比例尺:Integer
    +資料處理歷程:自由文字
  }

  Class 掃描圖像 {
    +原件來源:自由文字
    +原件尺寸:自由文字
    +掃描解析度:自由文字
  }

  Metadata <|-- 文獻書籍
  Metadata <|-- SpatialMetadata
  Metadata <|-- 掃描圖像
  SpatialMetadata <|-- 掃描圖像

@enduml
```

```uml
@startuml

  Class 子計畫代碼 <<CodeList>> {
    +子計畫一
    +子計畫二
    +子計畫三
    +子計畫四
    +未選取
  }

  Class 資料類型 <<CodeList>> {
    +統計資料
    +文獻書籍
    +掃描圖像-非空間類
    +掃描圖像-空間類
    +網格資料 grid
    +向量資料 vector
    +不規則三角網
    +立體像對
    +影音多媒體
  }

  Class 使用史料類型 <<CodeList>> {
    +清代方志
    +日治出版品與官方資料
    +戰後官方資料與鄉鎮志
    +碑文
    +報紙
    +地圖
    +台灣總督府檔案 ex公文類纂、府報、調查報告、職員錄、衛生法規
    +荷治時期檔案
    +地方田野收集文獻 ex族譜、寺廟志、帳冊、契約
  }

  Class 時間 <<DataType>> {
    +類型:時間類型
    +時間:W3C_NOTE-datetime
    +時間解析度:時間解析度類型
    +年代:自由文字
  }

  Class 單位 <<DataType>> {
    +類型:單位類型
    +名稱:自由文字
    +聯絡人:自由文字
    +聯絡電話:自由文字
    +連絡信箱:自由文字
  }

  Class 主題類型 <<Enumeration>> {
    +oceans=014
    +climatologyMeteorologyAtmosphere=004
    +boundaries=003
    +farming=001
    +structure=017
    +transportation=018
    +elevation=006
    +economy=005
    +biota=002
    +location=013
    +utilitiesCommunication=019
    +society=016
    +environment=007
    +intelligenceMilitary=011
    +planningCadastre=015
    +health=009
    +geoscientificInformation=008
    +inlandWaters=012
    +imageryBaseMapsEarthCover=010
  }

  Class 單位類型 <<CodeList>> {
    +作者
    +生產者
    +供應者
    +出版者
    +維護者
  }

  Class 時間類型 <<CodeList>> {
    +完成
    +修訂
    +出版
    +發布
    +資料內容涵蓋
  }

  Class 語言類型 <<CodeList>> {
    +現代標準漢語
    +客家語
    +閩南語
    +粵語
    +文言文
    +日語
    +英語
    +西班牙語
    +荷蘭語
    +西拉雅語
    +葡萄牙語
  }

  Class 編碼類型 <<CodeList>> {
    +big5
    +utf-8
    +latin1
    +gb2312
    +gb18030
    +shift_jis
    +euc-jp
  }

  Class 時間區間捷徑類型 <<CodeList>> {
    +荷西時期
    +明鄭時期
    +清康熙時期
    +清治前期
    +清雍正時期
    +清乾隆時期
    +清治後期
    +清嘉慶時期
    +清道光時期
    +清咸豐時期
    +清同治時期
    +清光緒時期
    +日治時期
    +日治時期[明治]
    +日治時期[大正]
    +日治時期[昭和]
    +太平洋戰爭時期
    +戰後
  }

  Class 時間解析度類型 <<Enumeration>> {
    +年
    +十年
    +一百年
    +日
    +月
  }

@enduml
```

```uml
@startuml

  Class CodeList {

  }

  Class Real {

  }

  Class W3C_NOTE-datetime {

  }

  Class Angle {

  }

  Class Year {

  }

  Class Integer {

  }

  Class GeoJSON {

  }

  Class CharacterString {

  }

@enduml
```


