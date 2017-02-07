<table>
        <tr><td>屬性名稱</td><td>定義</td>
        <td>選填條件</td><td>最多發生次數</td><td>資料型別</td>
        <td>值域</td><td>備註</td></tr><tr style="max-width: 100%;">
                        <td>標題<br>Title</td>
                        <td style="min-width: 100px;">資料集名稱</td>
                        <td>M</td>
                        <td>1</td>
                        <td>CharacterString </td>
                        <td></td>
                        <td></td>
                    </tr><tr style="max-width: 100%;">
                        <td>網址<br>URL</td>
                        <td style="min-width: 100px;">資料集詮釋資料網址 </td>
                        <td>M</td>
                        <td>1</td>
                        <td>CharacterString </td>
                        <td>not_empty<br>unicode package_name_validator</td>
                        <td></td>
                    </tr><tr style="max-width: 100%;">
                        <td>識別碼<br>Identifier</td>
                        <td style="min-width: 100px;">資料集檔案原始具有之唯一識別碼</td>
                        <td></td>
                        <td></td>
                        <td>CharacterString </td>
                        <td></td>
                        <td></td>
                    </tr><tr style="max-width: 100%;">
                        <td>資料類型<br>Data Type</td>
                        <td style="min-width: 100px;">資料集所屬之類型</td>
                        <td></td>
                        <td></td>
                        <td>Data_type </td>
                        <td></td>
                        <td></td>
                    </tr><tr style="max-width: 100%;">
                        <td>所屬子計畫<br>Sub Project</td>
                        <td style="min-width: 100px;">資料集所屬之子計畫</td>
                        <td></td>
                        <td></td>
                        <td>Subproject_code </td>
                        <td></td>
                        <td></td>
                    </tr><tr style="max-width: 100%;">
                        <td>摘要<br>Description</td>
                        <td style="min-width: 100px;">資料集之重要特性說明</td>
                        <td></td>
                        <td></td>
                        <td>CharacterString </td>
                        <td></td>
                        <td></td>
                    </tr><tr style="max-width: 100%;">
                        <td>組織<br>Organization</td>
                        <td style="min-width: 100px;">資料集所屬之組織單位</td>
                        <td></td>
                        <td></td>
                        <td>CharacterString </td>
                        <td></td>
                        <td></td>
                    </tr><tr style="max-width: 100%;">
                        <td>語言<br> Language</td>
                        <td style="min-width: 100px;">資料集檔案原始之語系</td>
                        <td></td>
                        <td></td>
                        <td>Language_type </td>
                        <td></td>
                        <td></td>
                    </tr><tr style="max-width: 100%;">
                        <td>編碼<br>Encoding</td>
                        <td style="min-width: 100px;">資料集檔案之字元編碼標準</td>
                        <td></td>
                        <td></td>
                        <td>Encoding_type </td>
                        <td></td>
                        <td></td>
                    </tr><tr style="max-width: 100%;">
                        <td>時間解析度<br>Temporal Resolution</td>
                        <td style="min-width: 100px;">資料集檔案內容所代表時間之最細致時間單位</td>
                        <td></td>
                        <td></td>
                        <td>Temp_res_type </td>
                        <td></td>
                        <td></td>
                    </tr><tr style="max-width: 100%;">
                        <td>起始時間<br>Start Time</td>
                        <td style="min-width: 100px;">資料集檔案內容所代表時間之起始時間點(段)</td>
                        <td></td>
                        <td></td>
                        <td>W3C_NOTE-datetime </td>
                        <td>ignore_missing<br>temp_res_validator</td>
                        <td>由時間解析度決定。接受的格式為 'YYYY' (年/十年/百年)、'YYYY-MM' (月)、'YYYY-MM-DD' (日)。<br>Depend on the temporal resolution setting. Acceptable formats: 'YYYY', 'YYYY-MM', or 'YYYY-MM-DD'.</td>
                    </tr><tr style="max-width: 100%;">
                        <td>結束時間<br>End Time</td>
                        <td style="min-width: 100px;">資料集檔案內容所代表時間之結束時間點(段)</td>
                        <td></td>
                        <td></td>
                        <td>W3C_NOTE-datetime </td>
                        <td>ignore_missing<br>temp_res_validator</td>
                        <td>由時間解析度決定。接受的格式為 'YYYY' (年/十年/百年)、'YYYY-MM' (月)、'YYYY-MM-DD' (日)。<br>Depend on the temporal resolution setting. Acceptable formats: 'YYYY', 'YYYY-MM', or 'YYYY-MM-DD'.</td>
                    </tr><tr style="max-width: 100%;">
                        <td>時間區間捷徑<br>Time Period Shortcut</td>
                        <td style="min-width: 100px;">資料集檔案內容所代表時間之歷史時期</td>
                        <td></td>
                        <td></td>
                        <td>Time_period_type </td>
                        <td></td>
                        <td>此捷徑提供部分歷史時期，供您快速填寫資料歷史年代。<br>This shortcut provides some historical periods for filling temporal information of the dataset.</td>
                    </tr><tr style="max-width: 100%;">
                        <td>作者<br>Author</td>
                        <td style="min-width: 100px;">資料集檔案之原始創作者或單位</td>
                        <td></td>
                        <td></td>
                        <td>CharacterString </td>
                        <td>not_empty</td>
                        <td></td>
                    </tr><tr style="max-width: 100%;">
                        <td>作者的電子郵件<br>Author Email</td>
                        <td style="min-width: 100px;">創作者(單位)之電子郵件信箱</td>
                        <td></td>
                        <td></td>
                        <td>CharacterString </td>
                        <td></td>
                        <td></td>
                    </tr><tr style="max-width: 100%;">
                        <td>作者的聯絡電話<br>Author Phone</td>
                        <td style="min-width: 100px;">創作者(單位)之聯絡電話</td>
                        <td></td>
                        <td></td>
                        <td>CharacterString </td>
                        <td></td>
                        <td></td>
                    </tr><tr style="max-width: 100%;">
                        <td>維護者<br>Maintainer</td>
                        <td style="min-width: 100px;">負責維護資料集檔案之人員或單位</td>
                        <td></td>
                        <td></td>
                        <td>CharacterString </td>
                        <td></td>
                        <td></td>
                    </tr><tr style="max-width: 100%;">
                        <td>維護者的電子郵件<br>Maintainer Email</td>
                        <td style="min-width: 100px;">維護者之電子郵件信箱</td>
                        <td></td>
                        <td></td>
                        <td>CharacterString </td>
                        <td></td>
                        <td></td>
                    </tr><tr style="max-width: 100%;">
                        <td>維護者的聯絡電話<br>Maintainer Phone</td>
                        <td style="min-width: 100px;">維護者之聯絡電話</td>
                        <td></td>
                        <td></td>
                        <td>CharacterString </td>
                        <td></td>
                        <td></td>
                    </tr><tr style="max-width: 100%;">
                        <td>主題關鍵字<br>Theme Keyword</td>
                        <td style="min-width: 100px;">可具體描述資料集主題的常用字彙或專有名詞</td>
                        <td>M</td>
                        <td>3</td>
                        <td>Theme_keyword_type </td>
                        <td>repeating_text<br>append_time_period duplicate_validator</td>
                        <td></td>
                    </tr><tr style="max-width: 100%;">
                        <td>空間範圍關鍵字<br>Spatial Keyword</td>
                        <td style="min-width: 100px;">可具體描述資料集空間範圍的地名或專有名詞</td>
                        <td>M</td>
                        <td>3</td>
                        <td>CharacterString </td>
                        <td></td>
                        <td></td>
                    </tr><tr style="max-width: 100%;">
                        <td>空間範圍<br>Spatial</td>
                        <td style="min-width: 100px;">描述資料檔案所涵蓋之空間範圍</td>
                        <td></td>
                        <td></td>
                        <td>GeoJSON </td>
                        <td>scheming_required<br>json_validator remove_blank_wrap</td>
                        <td></td>
                    </tr><tr style="max-width: 100%;">
                        <td>空間範圍.X.min<br>X.min</td>
                        <td style="min-width: 100px;">資料檔案內容所涵蓋空間範圍之最西經度，以角度表示</td>
                        <td></td>
                        <td></td>
                        <td>Angle </td>
                        <td>scheming_required<br>long_validator</td>
                        <td></td>
                    </tr><tr style="max-width: 100%;">
                        <td>空間範圍.X.max<br>X.max</td>
                        <td style="min-width: 100px;">資料檔案內容所涵蓋空間範圍之最東經度，以角度表示</td>
                        <td></td>
                        <td></td>
                        <td>Angle </td>
                        <td>scheming_required<br>long_validator</td>
                        <td></td>
                    </tr><tr style="max-width: 100%;">
                        <td>空間範圍.Y.min<br>Y.min</td>
                        <td style="min-width: 100px;">資料檔案內容所涵蓋空間範圍之最南緯度，以角度表示</td>
                        <td></td>
                        <td></td>
                        <td>Angle </td>
                        <td>scheming_required<br>lat_validator</td>
                        <td></td>
                    </tr><tr style="max-width: 100%;">
                        <td>空間範圍.Y.max<br>Y.max</td>
                        <td style="min-width: 100px;">資料檔案內容所涵蓋空間範圍之最北緯度，以角度表示</td>
                        <td></td>
                        <td></td>
                        <td>Angle</td>
                        <td>scheming_required<br>lat_validator</td>
                        <td></td>
                    </tr><tr style="max-width: 100%;">
                        <td>授權<br>License</td>
                        <td style="min-width: 100px;">資料檔案授權之方式</td>
                        <td>M</td>
                        <td>1</td>
                        <td>License_code </td>
                        <td></td>
                        <td></td>
                    </tr><tr style="max-width: 100%;">
                        <td>參考來源<br>Reference</td>
                        <td style="min-width: 100px;">資料集有關之參考資源描述</td>
                        <td>O</td>
                        <td>3</td>
                        <td>CharacterString </td>
                        <td></td>
                        <td></td>
                    </tr><tr style="max-width: 100%;">
                        <td>標籤<br>Tags</td>
                        <td style="min-width: 100px;">描述資料集主題或空間的字彙標籤</td>
                        <td>O</td>
                        <td>N</td>
                        <td>CharacterString </td>
                        <td></td>
                        <td></td>
                    </tr><tr style="max-width: 100%;">
                        <td>資料建置時間<br>Created Time</td>
                        <td style="min-width: 100px;">資料集檔案產出時間</td>
                        <td></td>
                        <td></td>
                        <td>CharacterString </td>
                        <td>ignore_missing<br>date_validator</td>
                        <td>此處填寫資料產出時間，接受的格式為 'YYYY'、'YYYY-MM'、'YYYY-MM-DD'。若未填寫月 (日)，則由 '01' 取代。<br>The time when data become available. Acceptable formats: 'YYYY', 'YYYY-MM', or 'YYYY-MM-DD'. Missing month (Day) will be filled with '01'</td>
                    </tr></table>