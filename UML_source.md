# UML diagram

UML diagram

```uml
@startuml

  Class Metadata {
    +title[1..1]:CharacterString 
    /'{"def":"資料集名稱","zhTW":"標題","值域":"自由文字"}'/
    +name[1..1]:CharacterString 
    /'{"def":"資料集詮釋資料網址","zhTW":"網址","值域":"unicode","note":"為CKAN預設之欄位"}'/
    +identifier[0..1]:CharacterString
    /'{"def":"資料集檔案原始具有之唯一識別碼","zhTW":"識別碼","值域":"自由文字"}'/
    +data_type[0..1]:Data_type
    /'{"def":"資料集所屬之類型","zhTW":"資料類型","值域":"codelist"}'/
    +proj[0..1]:Subproject_code
    /'{"def":"資料集所屬之子計畫","zhTW":"所屬子計畫","值域":"codelist"}'/
    +notes[0..1]:CharacterString
    /'{"def":"資料集之重要特性說明","zhTW":"摘要","值域":"自由文字"}'/
    +owner_org[0..1]:CharacterString
    /'{"def":"資料集所屬之組織單位","zhTW":"組織","值域":"codelist","note":"為CKAN預設之欄位"}'/
    +language[0..1]:Language_type
    /'{"def":"資料集檔案原始之語系","zhTW":"語言","值域":"codelist"}'/
    +encoding[0..1]:Encoding_type
    /'{"def":"資料集檔案之字元編碼標準","zhTW":"編碼","值域":"codelist"}'/
    +temp_res[0..1]:Temp_res_type
    /'{"def":"資料集檔案內容所代表時間之最細致時間單位","zhTW":"時間解析度","值域":"codelist"}'/
    +start_time[0..1]:W3C_NOTE-datetime
    /'{"def":"資料集檔案內容所代表時間之起始時間點(段)","zhTW":"起始時間","值域":"由時間解析度決定。接受的格式為 'YYYY' (年/十年/百年)、'YYYY-MM' (月)、'YYYY-MM-DD' (日)。Depend on the temporal resolution setting. Acceptable formats: 'YYYY', 'YYYY-MM', or 'YYYY-MM-DD'."}'/
    +end_time[0..1]:W3C_NOTE-datetime
    /'{"def":"資料集檔案內容所代表時間之結束時間點(段)","zhTW":"結束時間","值域":"由時間解析度決定。接受的格式為 'YYYY' (年/十年/百年)、'YYYY-MM' (月)、'YYYY-MM-DD' (日)。Depend on the temporal resolution setting. Acceptable formats: 'YYYY', 'YYYY-MM', or 'YYYY-MM-DD'."}'/
    +time_period[0..1]:Time_period_type
    /'{"def":"資料集檔案內容所代表時間之歷史時期","zhTW":"時間區間捷徑","值域":"codelist"}'/
    +author_name[0..1]:CharacterString
    /'{"def":"資料集檔案之原始創作者或單位","zhTW":"作者","值域":"自由文字"}'/
    +author_mail[0..1]:CharacterString
    /'{"def":"創作者(單位)之電子郵件信箱","zhTW":"作者電子郵件","值域":"自由文字"}'/
    +author_phone[0..1]:CharacterString
    /'{"def":"創作者(單位)之聯絡電話","zhTW":"作者聯絡電話","值域":"自由文字"}'/
    +maintainer_name[0..1]:CharacterString
    /'{"def":"負責維護資料集檔案之人員或單位","zhTW":"維護者","值域":"自由文字"}'/
    +maintainer_mail[0..1]:CharacterString
    /'{"def":"維護者之電子郵件信箱","zhTW":"維護者電子郵件","值域":"自由文字"}'/
    +maintainer_phone[0..1]:CharacterString
    /'{"def":"維護者之聯絡電話","zhTW":"維護者聯絡電話","值域":"自由文字"}'/
    +theme_keyword[1..3]:Theme_keyword_type 
    /'{"def":"可具體描述資料集主題的常用字彙或專有名詞","zhTW":"主題關鍵字","值域":"codelist"}'/
    +loc_keyword[1..3]:CharacterString 
    /'{"def":"可具體描述資料集空間範圍的地名或專有名詞","zhTW":"空間範圍關鍵字","值域":"codelist"}'/
    +spatial[0..1]:GeoJSON
    /'{"def":"描述資料檔案所涵蓋之空間範圍","zhTW":"空間範圍","值域":"自由文字","note":"為CKAN預設之欄位"}'/
    +x_min[0..1]:Angle
    /'{"def":"資料檔案內容所涵蓋空間範圍之最西經度，以角度表示","zhTW":"最西經度值","值域":"-180,0 <= 最西經度值<= 180,0"}'/
    +x_max[0..1]:Angle
    /'{"def":"資料檔案內容所涵蓋空間範圍之最東經度，以角度表示","zhTW":"最東經度值","值域":"-180,0 <= 最東經度值<= 180,0"}'/
    +y_min[0..1]:Angle
    /'{"def":"資料檔案內容所涵蓋空間範圍之最南緯度，以角度表示","zhTW":"最南緯度值","值域":"-90,0 <= 最南緯度值<= 90,0;"}'/
    +y_max[0..1]:Angle
    /'{"def":"資料檔案內容所涵蓋空間範圍之最北緯度，以角度表示","zhTW":"最北緯度值","值域":"-90,0 <= 最北緯度值<= 90,0;"}'/
    +subject[0..1]:Theme_type
    /'{"def":"資料檔案內容描述現象之主題分類","zhTW":"主題分類","值域":"codelist"}'/
    +license_id[1..1]:License_code 
    /'{"def":"資料檔案授權之方式","zhTW":"授權","值域":"codelist"}'/
    +ref[0..3]:CharacterString 
    /'{"def":"資料集有關之參考資源描述","zhTW":"參考來源","值域":"自由文字"}'/
    +tag_string[0..*]:CharacterString 
    /'{"def":"描述資料集主題或空間的字彙標籤","zhTW":"主題分類","值域":"自由文字","note":"為CKAN預設之欄位"}'/
    +created_time[0..1]:CharacterString
    /'{"def":"資料集檔案產出時間","zhTW":"主題分類","值域":"此處填寫資料產出時間，接受的格式為 'YYYY'、'YYYY-MM'、'YYYY-MM-DD'。若未填寫月 (日)，則由 '01' 取代。The time when data become available. Acceptable formats: 'YYYY', 'YYYY-MM', or 'YYYY-MM-DD'. Missing month (Day) will be filled with '01'"}'/
  }
  Class Ref_book {
    +book_isbn[0..1]:CharacterString
    /'{"def":"文獻書籍資料之國際標準書號","zhTW":"國際標準書號[isbn]","值域":"自由文字"}'/
    +book_issn[0..1]:CharacterString
    /'{"def":"文獻書籍資料之國際標準叢刊號","zhTW":"國際標準叢刊號[issn]","值域":"自由文字"}'/
    +book_journal[0..1]:CharacterString
    /'{"def":"文獻書籍資料之期刊名稱","zhTW":"期刊名稱","值域":"自由文字"}'/
    +book_volume[0..1]:Interger
    /'{"def":"文獻書籍資料之卷號","zhTW":"卷期","值域":"整數"}'/
    +book_proceeding[0..1]:CharacterString
    /'{"def":"文獻書籍資料之論文集名稱","zhTW":"論文集名稱","值域":"自由文字"}'/
    +book_location[0..1]:CharacterString
    /'{"def":"文獻書籍資料之出版地","zhTW":"出版地","值域":"自由文字"}'/
    +book_publisher[0..1]:CharacterString
    /'{"def":"文獻書籍資料之出版社","zhTW":"出版社","值域":"自由文字"}'/
    +book_year[0..1]:Interger
    /'{"def":"文獻書籍資料之出版年份","zhTW":"出版年份","值域":"整數"}'/
    +book_query[0..1]:CharacterString
    /'{"def":"文獻書籍資料之出版社","zhTW":"書目查詢","值域":"自由文字"}'/
    +book_url[0..1]:CharacterString
    /'{"def":"文獻書籍資料之電子資源連結","zhTW":"網址","值域":"自由文字"}'/
    +book_hist_materials[0..*]:Hist_material_type
    /'{"def":"文獻書籍資料產出所參考之歷史資源","zhTW":"使用史料","值域":"自由文字"}'/
    +book_notes[0..1]:CharacterString
    /'{"def":"文獻書籍資料之備註說明","zhTW":"備註","值域":"自由文字"}'/
  }

  Class SpatialMetadata {
    +resource_crs[0..1]:Integer
    /'{"def":"空間資料集之坐標參考系統EPSG代碼","zhTW":"坐標系統","值域":"整數"}'/ 
    +spatial_res[0..1]:Real
    /'{"def":"空間資料集資料之地面取樣距離","zhTW":"空間解析度","值域":"實數","note":"距離單位為公尺"}'/
    +scale[0..1]:Integer
    /'{"def":"空間資料集資料之以等同紙圖或統計圖表比例尺方式所表示之比例尺分母數值","zhTW":"比例尺","值域":"整數","note":"記錄比例尺之分母"}'/
    +preprocessing/*Lineage[0..1]:CharacterString
    /'{"def":"空間資料集資料之處理歷程","zhTW":"處理歷程","值域":"自由文字"}'/
  }

  Class Scan_pics {
    +scan_source[0..1]:CharacterString
    /'{"def":"掃描圖像之原件來源、名稱或出處","zhTW":"原件來源","值域":"自由文字"}'/ 
    +scan_size[0..1]:CharacterString
    /'{"def":"掃描圖像之原件尺寸大小","zhTW":"原件尺寸","值域":"自由文字","note":"格式為長度x寬度，以公分為單位"}'/ 
    +scan_res[0..1]:CharacterString
    /'{"def":"掃描圖像之掃描解析度數值","zhTW":"掃描解析度","值域":"自由文字","note":"以DPI為單位"}'/ 
  }

  Metadata <|-- Ref_book
  Metadata <|-- SpatialMetadata
  Metadata <|-- Scan_pics
  SpatialMetadata <|-- Scan_pics

@enduml
```



add some text here


```uml
@startuml

  Class Resource_Metadata {
    +name[1..1]:CharacterString
    /'{"def":"資料檔案之名稱","zhTW":"檔案名稱","值域":"自由文字","note":"為CKAN預設之欄位"}'/
    +url[1..1]:CharacterString
    /'{"def":"資料檔案線上連結之網址","zhTW":"網址","值域":"unicode","note":"為CKAN預設之欄位"}'/
    +format[1..1]:CharacterString
    /'{"def":"資料檔案傳輸格式之名稱","zhTW":"格式","值域":"unicode","note":"為CKAN預設之欄位"}'/
    +resource_crs[0..1]:Integer
    /'{"def":"空間資料集檔案之坐標參考系統EPSG代碼","zhTW":"坐標系統","值域":"整數"}'/ 
    +description[0..1]:CharacterString
    /'{"def":"資料檔案之重要特性說明","zhTW":"摘要","值域":"摘要","note":"為CKAN預設之欄位"}'/ 
  }

  Class Subproject_code <<CodeList>> {
    +proj_1
    /'{"def":"子計畫一"}/
    +proj_2
    /'{"def":"子計畫二"}/
    +proj_3
    /'{"def":"子計畫三"}/
    +proj_4
    /'{"def":"子計畫四"}/
    +no_selection
    /'{"def":"未選取"}/
  }

  Class License_code <<CodeList>> {
    +授權類型未指定
    +開放資料共用公共領域貢獻和授權條款[PDDL]
    +開放資料公用姓名標示授權[ODC-BY]
    +創用CC公眾領域[CC0]
    +創用CC姓名標示[CC-BY]
    +創用CC姓名標示-相同方式分享[CC-BY-SA]
    +創用CC姓名標示-非商業性[CC-BY-NC]
    +創用CC姓名標示-非商業性-相同方式分享[CC-BY-NC-SA]
    +GNU自由文件授權條款[GFDL]
    +其他[開放]
    +其他[公眾領域]
    +其他[非商業]
    +其他[非開放]
    +政府資料開放平臺資料使用規範
  }

  Class Data_type <<CodeList>> {
    +statistics
    /'{"def":"統計資料"}/
    +books
    /'{"def":"文獻書籍"}/
    +pics_non_spatial
    /'{"def":"掃描圖像(非空間類)"}/
    +pics_spatial
    /'{"def":"掃描圖像(空間類)"}/
    +grid/*raster
    /'{"def":"網格資料"}/
    +vector
    /'{"def":"向量資料"}/
    +tin
    /'{"def":"不規則三角網"}/
    +steropair/*stereopair
    /'{"def":"立體像對"}/
    +multimedia
    /'{"def":"影音多媒體"}/
  }

  Class Hist_material_type <<CodeList>> {
    +local_chronicles_in_qing_dynasty
    +japan_officials
    +officials_in_postwar_period
    +inscriptions
    +newspapers
    +maps
    +taiwanese_governor_office_files
    +dutch_formosa
    +field_researches
  }

  Class Theme_type <<Enumeration>> {
    +oceans=014
    /'{"def":"與鹽水水體的特徵物和其特性（包含內陸地區）有關之主題<br>例如潮汐、受潮汐影響的浪潮、海岸資訊、暗礁"}'/
    +climatologyMeteorologyAtmosphere=004
    /'{"def":"與大氣的處理過程與現象有關之主題<br>例如雲、天氣、氣候、大氣條件、氣候改變、降雨量"}'/
    +boundaries=003
    /'{"def":"與土地權利描述有關之主題<br>例如行政邊界界線"}'/
    +farming=001
    /'{"def":"與動物飼養和/或植物種植有關之主題<br>例如農耕、灌溉、水栽法、農園、畜牧、病蟲害和家畜"}'/
    +structure=017
    /'{"def":"與人工設施有關之主題<br>例如建築物、博物館、教堂、工廠、住家、紀念碑、商店、塔樓"}'/
    +transportation=018
    /'{"def":"與運輸有關之主題<br>例如道路、機場/航線、運輸路線、隧道、航海圖、飛機或船之位置、航圖、鐵路"}'/
    +elevation=006
    /'{"def":"高於或低於海平面的高程資訊<br>例如高度、海洋探測、數值高程模型、坡度"}'/
    +economy=005
    /'{"def":"與經濟活動和狀態有關的主題<br>例如生產、勞動、稅收、貿易、工業、觀光和生態旅遊、林業、漁業、商業或補狩業、探測和資源開發，如礦物、石油或天然氣"}'/
    +biota=002
    /'{"def":"與自然環境中植物群和/或動物群有關之主題<br>例如野生動物、植被、生物科學、生態學、荒漠、海洋生活、溼地、棲息地"}'/
    +location=013
    /'{"def":"與位置資訊和服務有關之主題<br>例如地址、控制網、控制點、郵遞區號及服務"}'/
    +utilitiesCommunication=019
    /'{"def":"與能源、廢棄物系統和公共通訊服務有關之主題<br>例如水利發電、地熱發電、太陽能與核能、水質淨化與供給、污水收集處理、電力和天然氣供給、數據交換、長途電信、無線電、通信網路"}'/
    +society=016
    /'{"def":"與社會文化特性有關之主題<br>例如社會福利、人類學、考古學、教育、傳統信仰、禮俗習慣、人口統計資料、娛樂活動、社會影響的評價、犯罪、司法審判、人口普查情報"}'/
    +environment=007
    /'{"def":"與環境資源、保護和保存有關的主題<br>例如環境汙染、資源浪費、環境衝擊評估、環境監控風險、天然保育區、景觀"}'/
    +intelligenceMilitary=011
    /'{"def":"與軍事基地、結構、活動有關之主題<br>例如兵營、訓練場、軍事運輸、情報搜集"}'/
    +planningCadastre=015
    /'{"def":"與土地未來之使用資訊有關之主題<br>例如土地使用圖、都市計畫圖、地籍調查、土地所有權"}'/
    +health=009
    /'{"def":"與健康、健康服務、人文生態學與環境安全有關之主題<br>例如疾病與身體不適、影響健康的因素、保健法、藥物濫用、身心健康、健康服務"}'/
    +geoscientificInformation=008
    /'{"def":"與地球科學有關之主題<br>例如地球物理學的地物特徵、地質學、礦產資源、組合科學、地球岩盤的組成起源、地震危機、火山活動、山崩、重力資訊、土壤、永久凍土、水文地質學、侵蝕"}'/
    +inlandWaters=012
    /'{"def":"與內陸地區的水特徵物、排水系統和其特性有關之主題<br>例如河流與冰河、鹽水湖、水資源利用計畫、水壩、水流、水災、水質、水道圖"}'/
    +imageryBaseMapsEarthCover=010
    /'{"def":"與底圖有關之主題<br>例如地表、地形圖、影像、未分類的影像、文字註記"}'/
  } 

  Class Language_type <<CodeList>> {
    +big5
    /'{"def":"繁體中文"}/
    +utf-8
    +latin1
    /'{"def":"西歐字元"}/
    +gb2312
    /'{"def":"簡體中文"}/
    +gb18030
    /'{"def":"簡體中文"}/
    +shift_jis
    /'{"def":"日文"}/
    +euc-jp
    /'{"def":"日文"}/
  }

  Class Encoding_type <<CodeList>> {
    +zho
    /'{"def":"現代標準漢語"}/
    +hak
    /'{"def":"客家語"}/
    +nan
    /'{"def":"閩南語"}/
    +yue
    /'{"def":"粵語"}/
    +lzh
    /'{"def":"文言文"}/
    +jpn
    /'{"def":"日語"}/
    +eng
    /'{"def":"英語"}/
    +spa
    /'{"def":"西班牙語"}/
    +nld
    /'{"def":"荷蘭語"}/
    +fos
    /'{"def":"西拉雅語"}/
    +por
    /'{"def":"葡萄牙"}/
  }

  Class Time_period_type <<CodeList>> {
    +Dutch_formosa
    +Kingdom_of_tungning
    +Kangxi_period
    +Early_qing_dynasty
    +Yongzheng_period
    +Qianlong_period
    +Late_qing_dynasty
    +Jiaqing_period
    +Daoguang_period
    +Daoxian_period
    +Xianfeng_period
    +Tongzhi_period
    +Japanese_colonial_period
    +Meiji_period
    +Taisho_period
    +Shōwa_period
    +Pacific_war_period
    +Postwar_period
  }

  Class Temp_res_type <<Enumeration>> {
    +Year
    /'{"def":"年"}/
    +Decade
    /'{"def":"十年"}/
    +Century
    /'{"def":"一百年"}/
    +Date
    /'{"def":"日"}/
    +Month
    /'{"def":"月"}/
  }

  Class Theme_keyword_type <<CodeList>> {
    +荷西時期[1624-1662]
    +明鄭時期[1661-1683]
    +清康熙時期[1662-1722]
    +清治前期[1684-1786]
    +清雍正時期[1723-1735]
    +清乾隆時期[1736-1795]
    +清治後期[1787-1895]
    +清嘉慶時期[1796-1820]
    +清道光時期[1821-1850]
    +清咸豐時期[1851-1861]
    +清同治時期[1862-1874]
    +清光緒時期[1875-1908]
    +日治時期[1895-1945]
    +日治時期[明治][1895-1911]
    +日治時期[大正][1912-1925]
    +日治時期[昭和][1926-1945]
    +太平洋戰爭時期[1941-1945]
    +戰後[1945-]
    +事件
    +災害
    +地震
    +水災
    +颱風
    +政治
    +荷蘭
    +西班牙
    +日本
    +清朝
    +國民政府
    +行政區
    +行政機構
    +聚落
    +地形
    +沖積層
    +海岸
    +海岸變遷
    +地震
    +斷層
    +氾濫平原
    +潟湖
    +地層下陷
    +沿岸漂沙
    +沿岸沙洲
    +沿岸流
    +溼地
    +古河道
    +沙丘
    +海埔新生地
    +水文
    +河流
    +流域
    +水井
    +水圳
    +水庫
    +水源地
    +生態
    +生態保育區
    +國家公園
    +公共衛生
    +醫院
    +流行病
    +經濟產業
    +農業
    +漁業
    +林業
    +商業
    +工業
    +糖廠
    +銀行
    +樟腦
    +土地利用
    +族群
    +人口統計
    +人口分佈
    +原住民
    +平埔族
    +西拉雅
    +荷蘭人
    +西班牙人
    +日本人
    +漢人
    +宗教信仰
    +寺廟
    +教堂
    +交通
    +道路
    +港口
    +鐵路
    +郵政
    +航線
    +主題圖
    +基本圖
    +歷史地圖
    +海圖
    +港口圖
    +耕地圖
    +溪地圖
    +市街圖
    +鳥瞰圖
    +戰爭圖
    +港口圖
    +耕地圖
    +溪地圖
    +市街圖
    +鳥瞰圖
    +戰爭圖
    +衛星影像
    +航空相片
    +地名
    +氣候
    +數位典藏
    +戶口調查
    +種族系

  }

  Class Loc_keyword_type <<CodeList>> {
    +七股區
    +下營區
    +中西區
    +仁德區
    +佳里區
    +六甲區
    +北區
    +北門區
    +南化區
    +南區
    +台南市
    +善化區
    +大內區
    +學甲區
    +安南區
    +安定區
    +安平區
    +官田區
    +將軍區
    +山上區
    +左鎮區
    +後壁區
    +新化區
    +新市區
    +新營區
    +東區
    +東山區
    +柳營區
    +楠西區
    +歸仁區
    +永康區
    +玉井區
    +白河區
    +西港區
    +關廟區
    +鹽水區
    +麻豆區
    +龍崎區
    +新港社
    +歐王社
    +蕭壟社
    +北線尾
    +鹿耳門
    +赤崁樓
    +熱蘭遮城
    +紅毛城
    +大目降社
    +赤崁街
    +赤崁社
    +大員
    +台江
    +赤崁
    +麻豆社
    +噍吧哖
    +哆喀嘓社
    +蕭壟溪
    +新港溪
    +清水溪
    +鹽水溪
    +堯港
    +下淡水社
    +打狗
    +放索溪
    +萬丹
    +目加溜灣
    +大武壟社
    +芒仔芒社
    +加老灣
    +茄藤社
    +漁夫角
    +上淡水社
    +瑯嶠
    +搭樓社
    +力力社
    +加祿堂
    +阿猴社
    +大澤機社
    +打狗山
    +小琉球嶼
    +淡水溪
    +放索社
    +魍港
    +笨港
    +打貓社
    +他里霧社
    +斗六社
    +猴悶社
    +魍港城堡
    +漁夫島
    +華武壟社
    +大坵田
    +龜佛山
    +槺榔
    +鹿仔草
    +南勢竹
    +龜仔港
    +土獅仔
    +諸羅山社
    +笨港溪
    +麻豆溪
    +井水港
    +北新
    +二鯤鯓
    +三鯤鯓
    +四鯤鯓
    +安平港
    +安平街
    +南鯤身廟
    +大道公廟
    +關帝廟
    +台灣
    +臺南洲
    +臺南市
    +北門郡
    +新營郡
    +東石郡
    +北門郡
    +新化郡
    +新豐郡
    +臺南廳
    +嘉義廳
    +曾文郡
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


