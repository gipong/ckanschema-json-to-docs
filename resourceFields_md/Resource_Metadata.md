<table>
        <tr><td>屬性名稱</td><td>定義</td>
        <td>選填條件</td><td>最多發生次數</td><td>資料型別</td>
        <td>值域</td><td>備註</td></tr><tr style="max-width: 100%;">
                        <td>網址<br>URL</td>
                        <td style="min-width: 100px;">資料檔案之名稱</td>
                        <td>M</td>
                        <td>1</td>
                        <td>CharacterString</td>
                        <td>not_empty<br>unicode package_name_validator</td>
                        <td></td>
                    </tr><tr style="max-width: 100%;">
                        <td>名稱<br>Name</td>
                        <td style="min-width: 100px;">資料檔案之名稱</td>
                        <td>M</td>
                        <td>1</td>
                        <td>CharacterString</td>
                        <td></td>
                        <td></td>
                    </tr><tr style="max-width: 100%;">
                        <td>網址<br>URL</td>
                        <td style="min-width: 100px;">資料檔案線上連結之網址</td>
                        <td>M</td>
                        <td>1</td>
                        <td>CharacterString</td>
                        <td></td>
                        <td></td>
                    </tr><tr style="max-width: 100%;">
                        <td>格式<br>Format</td>
                        <td style="min-width: 100px;">資料檔案傳輸格式之名稱</td>
                        <td>M</td>
                        <td>1</td>
                        <td>CharacterString</td>
                        <td></td>
                        <td></td>
                    </tr><tr style="max-width: 100%;">
                        <td>座標參考系統<br>Coordinate Systems</td>
                        <td style="min-width: 100px;">空間資料集檔案之坐標參考系統EPSG代碼</td>
                        <td>O</td>
                        <td>1</td>
                        <td>Integer</td>
                        <td>ignore_missing<br>positive_integer_validator</td>
                        <td>EPSG:4326→WGS84 (預設), EPSG:3826→TWD97/TM2 台灣, EPSG:3821→TWD67, EPSG:3825→TWD97/TM2 澎湖, EPSG:3828→TWD67/TM2 台灣<br>EPSG:4326→WGS84 (Default), EPSG:3826→TWD97/TM2 Taiwan, EPSG:3821→TWD67, EPSG:3825→TWD97/TM2 Penghu, EPSG:3828→TWD67/TM2 Taiwan</td>
                    </tr><tr style="max-width: 100%;">
                        <td>摘要<br>Description</td>
                        <td style="min-width: 100px;">資料檔案之重要特性說明</td>
                        <td>O</td>
                        <td>1</td>
                        <td>CharacterString</td>
                        <td></td>
                        <td></td>
                    </tr></table>