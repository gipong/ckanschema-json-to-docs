<table>
        <tr><td>屬性名稱</td><td>定義</td>
        <td>選填條件</td><td>最多發生次數</td><td>資料型別</td>
        <td>值域</td><td>備註</td></tr><tr style="max-width: 100%;">
                        <td>標題<br>Title</td>
                        <td style="min-width: 100px;"></td>
                        <td>M</td>
                        <td>1</td>
                        <td>CharacterString </td>
                        <td></td>
                        <td></td>
                    </tr><tr style="max-width: 100%;">
                        <td>網址<br>URL</td>
                        <td style="min-width: 100px;"></td>
                        <td>M</td>
                        <td>1</td>
                        <td>CharacterString </td>
                        <td>not_empty<br>unicode package_name_validator</td>
                        <td></td>
                    </tr><tr style="max-width: 100%;">
                        <td>名稱<br>Name</td>
                        <td style="min-width: 100px;"></td>
                        <td>M</td>
                        <td>1</td>
                        <td>CharacterString </td>
                        <td></td>
                        <td></td>
                    </tr><tr style="max-width: 100%;">
                        <td>識別碼<br>Identifier</td>
                        <td style="min-width: 100px;"></td>
                        <td>O</td>
                        <td>1</td>
                        <td>CharacterString</td>
                        <td></td>
                        <td></td>
                    </tr><tr style="max-width: 100%;">
                        <td>資料類型<br>Data Type</td>
                        <td style="min-width: 100px;"></td>
                        <td>O</td>
                        <td>1</td>
                        <td><a href="Data_type.html">Data_type</a></td>
                        <td></td>
                        <td></td>
                    </tr><tr style="max-width: 100%;">
                        <td>所屬子計畫<br>Sub Project</td>
                        <td style="min-width: 100px;"></td>
                        <td>O</td>
                        <td>1</td>
                        <td><a href="Subproject_code.html">Subproject_code</a></td>
                        <td></td>
                        <td></td>
                    </tr><tr style="max-width: 100%;">
                        <td>摘要<br>Description</td>
                        <td style="min-width: 100px;"></td>
                        <td>O</td>
                        <td>1</td>
                        <td>CharacterString</td>
                        <td></td>
                        <td></td>
                    </tr><tr style="max-width: 100%;">
                        <td>組織<br>Organization</td>
                        <td style="min-width: 100px;"></td>
                        <td>O</td>
                        <td>1</td>
                        <td>CharacterString</td>
                        <td></td>
                        <td></td>
                    </tr><tr style="max-width: 100%;">
                        <td>語言<br> Language</td>
                        <td style="min-width: 100px;"></td>
                        <td>O</td>
                        <td>1</td>
                        <td><a href="Language_type.html">Language_type</a></td>
                        <td></td>
                        <td></td>
                    </tr><tr style="max-width: 100%;">
                        <td>編碼<br>Encoding</td>
                        <td style="min-width: 100px;"></td>
                        <td>O</td>
                        <td>1</td>
                        <td><a href="Encoding_type.html">Encoding_type</a></td>
                        <td></td>
                        <td></td>
                    </tr><tr style="max-width: 100%;">
                        <td>時間解析度<br>Temporal Resolution</td>
                        <td style="min-width: 100px;"></td>
                        <td>O</td>
                        <td>1</td>
                        <td><a href="Temp_res_type.html">Temp_res_type</a></td>
                        <td></td>
                        <td></td>
                    </tr><tr style="max-width: 100%;">
                        <td>起始時間<br>Start Time</td>
                        <td style="min-width: 100px;"></td>
                        <td>O</td>
                        <td>1</td>
                        <td>W3C_NOTE-datetime</td>
                        <td>ignore_missing<br>temp_res_validator</td>
                        <td>由時間解析度決定。接受的格式為 'YYYY' (年/十年/百年)、'YYYY-MM' (月)、'YYYY-MM-DD' (日)。<br>Depend on the temporal resolution setting. Acceptable formats: 'YYYY', 'YYYY-MM', or 'YYYY-MM-DD'.</td>
                    </tr><tr style="max-width: 100%;">
                        <td>結束時間<br>End Time</td>
                        <td style="min-width: 100px;"></td>
                        <td>O</td>
                        <td>1</td>
                        <td>W3C_NOTE-datetime</td>
                        <td>ignore_missing<br>temp_res_validator</td>
                        <td>由時間解析度決定。接受的格式為 'YYYY' (年/十年/百年)、'YYYY-MM' (月)、'YYYY-MM-DD' (日)。<br>Depend on the temporal resolution setting. Acceptable formats: 'YYYY', 'YYYY-MM', or 'YYYY-MM-DD'.</td>
                    </tr><tr style="max-width: 100%;">
                        <td>時間區間捷徑<br>Time Period Shortcut</td>
                        <td style="min-width: 100px;"></td>
                        <td>O</td>
                        <td>1</td>
                        <td><a href="Time_period_type.html">Time_period_type</a></td>
                        <td></td>
                        <td>此捷徑提供部分歷史時期，供您快速填寫資料歷史年代。<br>This shortcut provides some historical periods for filling temporal information of the dataset.</td>
                    </tr><tr style="max-width: 100%;">
                        <td>作者<br>Author</td>
                        <td style="min-width: 100px;"></td>
                        <td>O</td>
                        <td>1</td>
                        <td>CharacterString</td>
                        <td>not_empty</td>
                        <td></td>
                    </tr><tr style="max-width: 100%;">
                        <td>作者的電子郵件<br>Author Email</td>
                        <td style="min-width: 100px;"></td>
                        <td>O</td>
                        <td>1</td>
                        <td>CharacterString</td>
                        <td></td>
                        <td></td>
                    </tr><tr style="max-width: 100%;">
                        <td>作者的聯絡電話<br>Author Phone</td>
                        <td style="min-width: 100px;"></td>
                        <td>O</td>
                        <td>1</td>
                        <td>CharacterString</td>
                        <td></td>
                        <td></td>
                    </tr><tr style="max-width: 100%;">
                        <td>維護者<br>Maintainer</td>
                        <td style="min-width: 100px;"></td>
                        <td>O</td>
                        <td>1</td>
                        <td>CharacterString</td>
                        <td></td>
                        <td></td>
                    </tr><tr style="max-width: 100%;">
                        <td>維護者的電子郵件<br>Maintainer Email</td>
                        <td style="min-width: 100px;"></td>
                        <td>O</td>
                        <td>1</td>
                        <td>CharacterString</td>
                        <td></td>
                        <td></td>
                    </tr><tr style="max-width: 100%;">
                        <td>維護者的聯絡電話<br>Maintainer Phone</td>
                        <td style="min-width: 100px;"></td>
                        <td>O</td>
                        <td>1</td>
                        <td>CharacterString</td>
                        <td></td>
                        <td></td>
                    </tr><tr style="max-width: 100%;">
                        <td>主題關鍵字<br>Theme Keyword</td>
                        <td style="min-width: 100px;"></td>
                        <td>M</td>
                        <td>3</td>
                        <td>Theme_keyword_type </td>
                        <td>repeating_text<br>append_time_period duplicate_validator</td>
                        <td></td>
                    </tr><tr style="max-width: 100%;">
                        <td>空間範圍關鍵字<br>Spatial Keyword</td>
                        <td style="min-width: 100px;"></td>
                        <td>M</td>
                        <td>3</td>
                        <td>CharacterString </td>
                        <td></td>
                        <td></td>
                    </tr><tr style="max-width: 100%;">
                        <td>空間範圍<br>Spatial</td>
                        <td style="min-width: 100px;"></td>
                        <td>O</td>
                        <td>1</td>
                        <td>GeoJSON</td>
                        <td>scheming_required<br>json_validator remove_blank_wrap</td>
                        <td></td>
                    </tr><tr style="max-width: 100%;">
                        <td>空間範圍.X.min<br>X.min</td>
                        <td style="min-width: 100px;"></td>
                        <td>O</td>
                        <td>1</td>
                        <td>Angle</td>
                        <td>scheming_required<br>long_validator</td>
                        <td></td>
                    </tr><tr style="max-width: 100%;">
                        <td>空間範圍.X.max<br>X.max</td>
                        <td style="min-width: 100px;"></td>
                        <td>O</td>
                        <td>1</td>
                        <td>Angle</td>
                        <td>scheming_required<br>long_validator</td>
                        <td></td>
                    </tr><tr style="max-width: 100%;">
                        <td>空間範圍.Y.min<br>Y.min</td>
                        <td style="min-width: 100px;"></td>
                        <td>O</td>
                        <td>1</td>
                        <td>Angle</td>
                        <td>scheming_required<br>lat_validator</td>
                        <td></td>
                    </tr><tr style="max-width: 100%;">
                        <td>空間範圍.Y.max<br>Y.max</td>
                        <td style="min-width: 100px;"></td>
                        <td>O</td>
                        <td>1</td>
                        <td>Angle</td>
                        <td>scheming_required<br>lat_validator</td>
                        <td></td>
                    </tr><tr style="max-width: 100%;">
                        <td>授權<br>License</td>
                        <td style="min-width: 100px;"></td>
                        <td>M</td>
                        <td>1</td>
                        <td>License_code </td>
                        <td></td>
                        <td></td>
                    </tr><tr style="max-width: 100%;">
                        <td>參考來源<br>Reference</td>
                        <td style="min-width: 100px;"></td>
                        <td>O</td>
                        <td>3</td>
                        <td>CharacterString </td>
                        <td></td>
                        <td></td>
                    </tr><tr style="max-width: 100%;">
                        <td>標籤<br>Tags</td>
                        <td style="min-width: 100px;"></td>
                        <td>O</td>
                        <td>N</td>
                        <td>CharacterString </td>
                        <td></td>
                        <td></td>
                    </tr><tr style="max-width: 100%;">
                        <td>資料建置時間<br>Created Time</td>
                        <td style="min-width: 100px;"></td>
                        <td>O</td>
                        <td>1</td>
                        <td>CharacterString</td>
                        <td>ignore_missing<br>date_validator</td>
                        <td>此處填寫資料產出時間，接受的格式為 'YYYY'、'YYYY-MM'、'YYYY-MM-DD'。若未填寫月 (日)，則由 '01' 取代。<br>The time when data become available. Acceptable formats: 'YYYY', 'YYYY-MM', or 'YYYY-MM-DD'. Missing month (Day) will be filled with '01'</td>
                    </tr></table>