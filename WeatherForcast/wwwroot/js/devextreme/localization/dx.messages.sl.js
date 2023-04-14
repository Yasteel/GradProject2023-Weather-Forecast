/*!
* DevExtreme (dx.messages.sl.js)
* Version: 22.2.4
* Build date: Thu Jan 19 2023
*
* Copyright (c) 2012 - 2023 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/
"use strict";

! function(root, factory) {
    if ("function" === typeof define && define.amd) {
        define((function(require) {
            factory(require("devextreme/localization"))
        }))
    } else if ("object" === typeof module && module.exports) {
        factory(require("devextreme/localization"))
    } else {
        factory(DevExpress.localization)
    }
}(0, (function(localization) {
    localization.loadMessages({
        sl: {
            Yes: "Da",
            No: "Ne",
            Cancel: "Prekli\u010di",
            Close: "Zapri",
            Clear: "Pobri\u0161i",
            Done: "Kon\u010dano",
            Loading: "Nalagam...",
            Select: "Izberi...",
            Search: "I\u0161\u010di",
            Back: "Nazaj",
            OK: "V redu",
            "dxCollectionWidget-noDataText": "Ni podatkov za prikaz",
            "dxDropDownEditor-selectLabel": "Izberi",
            "validation-required": "Obvezen podatek",
            "validation-required-formatted": "Podatek {0} je obvezen",
            "validation-numeric": "Vrednost mora biti \u0161tevilo",
            "validation-numeric-formatted": "{0} mora biti \u0161tevilo",
            "validation-range": "Vrednost je izven obmo\u010dja",
            "validation-range-formatted": "{0} je izven obmo\u010dja",
            "validation-stringLength": "Neustrezna dol\u017eina podatka",
            "validation-stringLength-formatted": "Dol\u017eina {0} ni ustrezna",
            "validation-custom": "Vrednost ni pravilna",
            "validation-custom-formatted": "Vrednost {0} je nepravilna",
            "validation-async": "Value is invalid",
            "validation-async-formatted": "{0} is invalid",
            "validation-compare": "Vrednosti se ne ujemata",
            "validation-compare-formatted": "{0} se ne ujema",
            "validation-pattern": "Vrednost ne ustreza vzorcu",
            "validation-pattern-formatted": "{0} ne ustreza vzorcu",
            "validation-email": "Email je neveljaven",
            "validation-email-formatted": "{0} je neveljaven",
            "validation-mask": "Vrednost je napa\u010dna",
            "dxLookup-searchPlaceholder": "Najmanj\u0161e \u0161tevilo znakov: {0}",
            "dxList-pullingDownText": "Povlecite navzdol za osve\u017eitev...",
            "dxList-pulledDownText": "Spustite za osve\u017eitev...",
            "dxList-refreshingText": "Osve\u017eujem...",
            "dxList-pageLoadingText": "Nalagam...",
            "dxList-nextButtonText": "Ve\u010d",
            "dxList-selectAll": "Izberi vse",
            "dxListEditDecorator-delete": "Izbri\u0161i",
            "dxListEditDecorator-more": "Ve\u010d",
            "dxScrollView-pullingDownText": "Povlecite navzdol za osve\u017eitev...",
            "dxScrollView-pulledDownText": "Spustite za osve\u017eitev...",
            "dxScrollView-refreshingText": "Osve\u017eujem...",
            "dxScrollView-reachBottomText": "Nalagam...",
            "dxDateBox-simulatedDataPickerTitleTime": "Izberi \u010das",
            "dxDateBox-simulatedDataPickerTitleDate": "Izberi datum",
            "dxDateBox-simulatedDataPickerTitleDateTime": "Izberi datum in \u010das",
            "dxDateBox-validation-datetime": "Vrednost mora biti datum ali \u010das",
            "dxFileUploader-selectFile": "Izberi datoteko",
            "dxFileUploader-dropFile": "ali spusti datoteko tukaj",
            "dxFileUploader-bytes": "bajtov",
            "dxFileUploader-kb": "kb",
            "dxFileUploader-Mb": "Mb",
            "dxFileUploader-Gb": "Gb",
            "dxFileUploader-upload": "Nalo\u017ei",
            "dxFileUploader-uploaded": "Nalo\u017eeno",
            "dxFileUploader-readyToUpload": "Pripravljeno za nalaganje",
            "dxFileUploader-uploadAbortedMessage": "Upload cancelled",
            "dxFileUploader-uploadFailedMessage": "Nalaganje je spodletelo",
            "dxFileUploader-invalidFileExtension": "Tip datoteke ni dovoljen",
            "dxFileUploader-invalidMaxFileSize": "Datoteka je prevelika",
            "dxFileUploader-invalidMinFileSize": "Datoteka je premajhna",
            "dxRangeSlider-ariaFrom": "Od",
            "dxRangeSlider-ariaTill": "Do",
            "dxSwitch-switchedOnText": "Vklopljeno",
            "dxSwitch-switchedOffText": "Izklopljeno",
            "dxForm-optionalMark": "opcijsko",
            "dxForm-requiredMessage": "Podatek {0} je obvezen",
            "dxNumberBox-invalidValueMessage": "Vrednost mora biti \u0161tevilo",
            "dxNumberBox-noDataText": "Ni podatkov",
            "dxDataGrid-columnChooserTitle": "Izbirnik stolpcev",
            "dxDataGrid-columnChooserEmptyText": "Povlecite stolpec sem, da ga skrijete",
            "dxDataGrid-groupContinuesMessage": "Nadaljevanje na naslednji strani",
            "dxDataGrid-groupContinuedMessage": "Nadaljevanje iz prej\u0161nje strani",
            "dxDataGrid-groupHeaderText": "Zdru\u017ei po tem stolpcu",
            "dxDataGrid-ungroupHeaderText": "Razdru\u017ei",
            "dxDataGrid-ungroupAllText": "Razdru\u017ei vse",
            "dxDataGrid-editingEditRow": "Uredi",
            "dxDataGrid-editingSaveRowChanges": "Shrani",
            "dxDataGrid-editingCancelRowChanges": "Prekli\u010di",
            "dxDataGrid-editingDeleteRow": "Bri\u0161i",
            "dxDataGrid-editingUndeleteRow": "Razveljavi brisanje",
            "dxDataGrid-editingConfirmDeleteMessage": "Ste prepri\u010dani, da \u017eelite izbrisati ta zapis?",
            "dxDataGrid-validationCancelChanges": "Prekli\u010di spremembe",
            "dxDataGrid-groupPanelEmptyText": "Povleci glavo stolpca sem za zdru\u017eevanje po tem stolpcu",
            "dxDataGrid-noDataText": "Ni podatkov",
            "dxDataGrid-searchPanelPlaceholder": "I\u0161\u010di...",
            "dxDataGrid-filterRowShowAllText": "(Vse)",
            "dxDataGrid-filterRowResetOperationText": "Ponastavi",
            "dxDataGrid-filterRowOperationEquals": "Enako",
            "dxDataGrid-filterRowOperationNotEquals": "Ni enako",
            "dxDataGrid-filterRowOperationLess": "Manj od",
            "dxDataGrid-filterRowOperationLessOrEquals": "Manj ali enako kot",
            "dxDataGrid-filterRowOperationGreater": "Ve\u010dje kot",
            "dxDataGrid-filterRowOperationGreaterOrEquals": "Ve\u010dje ali enako kot",
            "dxDataGrid-filterRowOperationStartsWith": "Se za\u010dne",
            "dxDataGrid-filterRowOperationContains": "Vsebuje",
            "dxDataGrid-filterRowOperationNotContains": "Ne vsebuje",
            "dxDataGrid-filterRowOperationEndsWith": "Se kon\u010da z",
            "dxDataGrid-filterRowOperationBetween": "Je med",
            "dxDataGrid-filterRowOperationBetweenStartText": "Za\u010detek",
            "dxDataGrid-filterRowOperationBetweenEndText": "Konec",
            "dxDataGrid-applyFilterText": "Uporabi filter",
            "dxDataGrid-trueText": "Da",
            "dxDataGrid-falseText": "Ne",
            "dxDataGrid-sortingAscendingText": "Razvrsti nara\u0161\u010dajo\u010de",
            "dxDataGrid-sortingDescendingText": "Razvrsti padajo\u010de",
            "dxDataGrid-sortingClearText": "Brez razvr\u0161\u010danja",
            "dxDataGrid-editingSaveAllChanges": "Shrani spremembe",
            "dxDataGrid-editingCancelAllChanges": "Zavrzi spremembe",
            "dxDataGrid-editingAddRow": "Dodaj vrstico",
            "dxDataGrid-summaryMin": "Min: {0}",
            "dxDataGrid-summaryMinOtherColumn": "Min od {1} je {0}",
            "dxDataGrid-summaryMax": "Maks: {0}",
            "dxDataGrid-summaryMaxOtherColumn": "Maks od {1} je {0}",
            "dxDataGrid-summaryAvg": "Povpr: {0}",
            "dxDataGrid-summaryAvgOtherColumn": "Povpr. od {1} je {0}",
            "dxDataGrid-summarySum": "Skupaj: {0}",
            "dxDataGrid-summarySumOtherColumn": "Skupaj od {1} je {0}",
            "dxDataGrid-summaryCount": "\u0160tevilo: {0}",
            "dxDataGrid-columnFixingFix": "Popravi",
            "dxDataGrid-columnFixingUnfix": "Ne popravi",
            "dxDataGrid-columnFixingLeftPosition": "Levo",
            "dxDataGrid-columnFixingRightPosition": "Desno",
            "dxDataGrid-exportTo": "Izvozi",
            "dxDataGrid-exportToExcel": "Izvozi v Excel datoteko",
            "dxDataGrid-exporting": "Izvozi...",
            "dxDataGrid-excelFormat": "Excel datoteka",
            "dxDataGrid-selectedRows": "Izbrane vrstice",
            "dxDataGrid-exportSelectedRows": "Izvozi izbrane vrstice",
            "dxDataGrid-exportAll": "Izvozi vse podatke",
            "dxDataGrid-headerFilterLabel": "Filter options",
            "dxDataGrid-headerFilterIndicatorLabel": "Show filter options for column '{0}'",
            "dxDataGrid-headerFilterEmptyValue": "(Prazno)",
            "dxDataGrid-headerFilterOK": "V redu",
            "dxDataGrid-headerFilterCancel": "Prekli\u010di",
            "dxDataGrid-ariaAdaptiveCollapse": "Hide additional data",
            "dxDataGrid-ariaAdaptiveExpand": "Display additional data",
            "dxDataGrid-ariaColumn": "Stolpec",
            "dxDataGrid-ariaValue": "Vrednost",
            "dxDataGrid-ariaFilterCell": "Filtriraj po celici",
            "dxDataGrid-ariaCollapse": "Skr\u010di",
            "dxDataGrid-ariaExpand": "Raz\u0161iri",
            "dxDataGrid-ariaDataGrid": "Tabela",
            "dxDataGrid-ariaSearchInGrid": "I\u0161\u010di v tabeli",
            "dxDataGrid-ariaSelectAll": "Izberi vse",
            "dxDataGrid-ariaSelectRow": "Izberi vrstico",
            "dxDataGrid-ariaToolbar": "Data grid toolbar",
            "dxDataGrid-filterBuilderPopupTitle": "Graditelj filtra",
            "dxDataGrid-filterPanelCreateFilter": "Ustvari filter",
            "dxDataGrid-filterPanelClearFilter": "Pobri\u0161i",
            "dxDataGrid-filterPanelFilterEnabledHint": "Omogo\u010di filtriranje",
            "dxTreeList-ariaTreeList": "Drevesni seznam",
            "dxTreeList-ariaSearchInGrid": "Search in the tree list",
            "dxTreeList-ariaToolbar": "Tree list toolbar",
            "dxTreeList-editingAddRowToNode": "Dodaj",
            "dxPager-infoText": "Stran {0} od {1} ({2} zapisov)",
            "dxPager-pagesCountText": "od",
            "dxPager-pageSizesAllText": "Vse",
            "dxPager-page": "Page {0}",
            "dxPager-prevPage": "Previous Page",
            "dxPager-nextPage": "Next Page",
            "dxPager-ariaLabel": "Page Navigation",
            "dxPivotGrid-grandTotal": "Skupna vsota",
            "dxPivotGrid-total": "{0} skupaj",
            "dxPivotGrid-fieldChooserTitle": "Izbirnik polj",
            "dxPivotGrid-showFieldChooser": "Prika\u017ei izbirnik polj",
            "dxPivotGrid-expandAll": "Raz\u0161iri vse",
            "dxPivotGrid-collapseAll": "Skr\u010di vse",
            "dxPivotGrid-sortColumnBySummary": 'Razvrsti "{0}" po tem stolpcu',
            "dxPivotGrid-sortRowBySummary": 'Razvrsti "{0}" po tej vrstici',
            "dxPivotGrid-removeAllSorting": "Brez razvr\u0161\u010danja",
            "dxPivotGrid-dataNotAvailable": "Ni na voljo",
            "dxPivotGrid-rowFields": "Vrstice",
            "dxPivotGrid-columnFields": "Stolpci",
            "dxPivotGrid-dataFields": "Podatki",
            "dxPivotGrid-filterFields": "Filtri",
            "dxPivotGrid-allFields": "Vsa polja",
            "dxPivotGrid-columnFieldArea": "Povleci stolpce tukaj",
            "dxPivotGrid-dataFieldArea": "Povleci podatke tukaj",
            "dxPivotGrid-rowFieldArea": "Povleci vrstice tukaj",
            "dxPivotGrid-filterFieldArea": "Povleci filtre tukaj",
            "dxScheduler-editorLabelTitle": "Predmet",
            "dxScheduler-editorLabelStartDate": "Datum za\u010detka",
            "dxScheduler-editorLabelEndDate": "Datum konca",
            "dxScheduler-editorLabelDescription": "Opis",
            "dxScheduler-editorLabelRecurrence": "Ponovi",
            "dxScheduler-openAppointment": "Odpri dogodek",
            "dxScheduler-recurrenceNever": "Nikoli",
            "dxScheduler-recurrenceMinutely": "Minutely",
            "dxScheduler-recurrenceHourly": "Hourly",
            "dxScheduler-recurrenceDaily": "Dnevno",
            "dxScheduler-recurrenceWeekly": "Tedensko",
            "dxScheduler-recurrenceMonthly": "Mese\u010dno",
            "dxScheduler-recurrenceYearly": "Letno",
            "dxScheduler-recurrenceRepeatEvery": "Ponovi vsak",
            "dxScheduler-recurrenceRepeatOn": "Ponovi na",
            "dxScheduler-recurrenceEnd": "Zaklju\u010di ponavljanje",
            "dxScheduler-recurrenceAfter": "Po",
            "dxScheduler-recurrenceOn": "Vklopljeno",
            "dxScheduler-recurrenceRepeatMinutely": "minute(s)",
            "dxScheduler-recurrenceRepeatHourly": "hour(s)",
            "dxScheduler-recurrenceRepeatDaily": "dan/dni",
            "dxScheduler-recurrenceRepeatWeekly": "teden/tednov",
            "dxScheduler-recurrenceRepeatMonthly": "mesec/mesecev",
            "dxScheduler-recurrenceRepeatYearly": "let",
            "dxScheduler-switcherDay": "Dan",
            "dxScheduler-switcherWeek": "Teden",
            "dxScheduler-switcherWorkWeek": "Delovni teden",
            "dxScheduler-switcherMonth": "Mesec",
            "dxScheduler-switcherAgenda": "Urnik",
            "dxScheduler-switcherTimelineDay": "Dnevna \u010dasovnica",
            "dxScheduler-switcherTimelineWeek": "Tedenska \u010dasovnica",
            "dxScheduler-switcherTimelineWorkWeek": "\u010casovnica delovnega tedna",
            "dxScheduler-switcherTimelineMonth": "Mese\u010dna \u010dasovnica",
            "dxScheduler-recurrenceRepeatOnDate": "na dan",
            "dxScheduler-recurrenceRepeatCount": "pojavitev",
            "dxScheduler-allDay": "Ves dan",
            "dxScheduler-confirmRecurrenceEditMessage": "\u017delite urediti samo ta dogodek ali tudi nadaljne ponovitve?",
            "dxScheduler-confirmRecurrenceDeleteMessage": "\u017delite izbrisati samo izbrani dogodek ali tudi nadaljne ponovitve?",
            "dxScheduler-confirmRecurrenceEditSeries": "Uredi niz dogodkov",
            "dxScheduler-confirmRecurrenceDeleteSeries": "Izbri\u0161i niz dogodkov",
            "dxScheduler-confirmRecurrenceEditOccurrence": "Uredi dogodek",
            "dxScheduler-confirmRecurrenceDeleteOccurrence": "Izbri\u0161i dogodek",
            "dxScheduler-noTimezoneTitle": "Brez \u010dasovnega pasa",
            "dxScheduler-moreAppointments": "\u0161e {0}",
            "dxCalendar-todayButtonText": "Danes",
            "dxCalendar-ariaWidgetName": "Koledar",
            "dxColorView-ariaRed": "Rde\u010da",
            "dxColorView-ariaGreen": "Zelena",
            "dxColorView-ariaBlue": "Modra",
            "dxColorView-ariaAlpha": "Prosojno",
            "dxColorView-ariaHex": "Koda barve (hex)",
            "dxTagBox-selected": "{0} izbranih",
            "dxTagBox-allSelected": "Vsi izbrani ({0})",
            "dxTagBox-moreSelected": "\u0161e {0}",
            "vizExport-printingButtonText": "Natisni",
            "vizExport-titleMenuText": "Izvozi/Natisni",
            "vizExport-exportButtonText": "{0} datoteka",
            "dxFilterBuilder-and": "In",
            "dxFilterBuilder-or": "Ali",
            "dxFilterBuilder-notAnd": "In ne",
            "dxFilterBuilder-notOr": "Ali ne",
            "dxFilterBuilder-addCondition": "Dodaj pogoj",
            "dxFilterBuilder-addGroup": "Dodaj skupino",
            "dxFilterBuilder-enterValueText": "<vnesi vrednost>",
            "dxFilterBuilder-filterOperationEquals": "Enako",
            "dxFilterBuilder-filterOperationNotEquals": "Ni enako",
            "dxFilterBuilder-filterOperationLess": "Je manj kot",
            "dxFilterBuilder-filterOperationLessOrEquals": "Je manj ali enako kot",
            "dxFilterBuilder-filterOperationGreater": "Je ve\u010dje kot",
            "dxFilterBuilder-filterOperationGreaterOrEquals": "Je ve\u010dje ali enako kot",
            "dxFilterBuilder-filterOperationStartsWith": "Se za\u010dne z",
            "dxFilterBuilder-filterOperationContains": "Vsebuje",
            "dxFilterBuilder-filterOperationNotContains": "Ne vsebuje",
            "dxFilterBuilder-filterOperationEndsWith": "Se kon\u010da z",
            "dxFilterBuilder-filterOperationIsBlank": "Je prazno",
            "dxFilterBuilder-filterOperationIsNotBlank": "Ni prazno",
            "dxFilterBuilder-filterOperationBetween": "Je med",
            "dxFilterBuilder-filterOperationAnyOf": "Je karkoli izmed",
            "dxFilterBuilder-filterOperationNoneOf": "Ni ni\u010d izmed",
            "dxHtmlEditor-dialogColorCaption": "Zamenjaj barvo pisave",
            "dxHtmlEditor-dialogBackgroundCaption": "Zamenjaj barvo ozadja",
            "dxHtmlEditor-dialogLinkCaption": "Dodaj povezavo",
            "dxHtmlEditor-dialogLinkUrlField": "URL",
            "dxHtmlEditor-dialogLinkTextField": "Tekst",
            "dxHtmlEditor-dialogLinkTargetField": "Odpri povezvo v novem oknu",
            "dxHtmlEditor-dialogImageCaption": "Dodaj sliko",
            "dxHtmlEditor-dialogImageUrlField": "URL",
            "dxHtmlEditor-dialogImageAltField": "Dodatno besedilo",
            "dxHtmlEditor-dialogImageWidthField": "\u0160irina (px)",
            "dxHtmlEditor-dialogImageHeightField": "Vi\u0161ina (px)",
            "dxHtmlEditor-dialogInsertTableRowsField": "Rows",
            "dxHtmlEditor-dialogInsertTableColumnsField": "Columns",
            "dxHtmlEditor-dialogInsertTableCaption": "Insert Table",
            "dxHtmlEditor-dialogUpdateImageCaption": "Update Image",
            "dxHtmlEditor-dialogImageUpdateButton": "Update",
            "dxHtmlEditor-dialogImageAddButton": "Add",
            "dxHtmlEditor-dialogImageSpecifyUrl": "From the Web",
            "dxHtmlEditor-dialogImageSelectFile": "From This Device",
            "dxHtmlEditor-dialogImageKeepAspectRatio": "Keep Aspect Ratio",
            "dxHtmlEditor-dialogImageEncodeToBase64": "Encode to Base64",
            "dxHtmlEditor-heading": "Naslov",
            "dxHtmlEditor-normalText": "Obi\u010dajno besedilo",
            "dxHtmlEditor-background": "Background Color",
            "dxHtmlEditor-bold": "Bold",
            "dxHtmlEditor-color": "Font Color",
            "dxHtmlEditor-font": "Font",
            "dxHtmlEditor-italic": "Italic",
            "dxHtmlEditor-link": "Add Link",
            "dxHtmlEditor-image": "Add Image",
            "dxHtmlEditor-size": "Size",
            "dxHtmlEditor-strike": "Strikethrough",
            "dxHtmlEditor-subscript": "Subscript",
            "dxHtmlEditor-superscript": "Superscript",
            "dxHtmlEditor-underline": "Underline",
            "dxHtmlEditor-blockquote": "Blockquote",
            "dxHtmlEditor-header": "Header",
            "dxHtmlEditor-increaseIndent": "Increase Indent",
            "dxHtmlEditor-decreaseIndent": "Decrease Indent",
            "dxHtmlEditor-orderedList": "Ordered List",
            "dxHtmlEditor-bulletList": "Bullet List",
            "dxHtmlEditor-alignLeft": "Align Left",
            "dxHtmlEditor-alignCenter": "Align Center",
            "dxHtmlEditor-alignRight": "Align Right",
            "dxHtmlEditor-alignJustify": "Align Justify",
            "dxHtmlEditor-codeBlock": "Code Block",
            "dxHtmlEditor-variable": "Add Variable",
            "dxHtmlEditor-undo": "Undo",
            "dxHtmlEditor-redo": "Redo",
            "dxHtmlEditor-clear": "Clear Formatting",
            "dxHtmlEditor-insertTable": "Insert Table",
            "dxHtmlEditor-insertHeaderRow": "Insert Header Row",
            "dxHtmlEditor-insertRowAbove": "Insert Row Above",
            "dxHtmlEditor-insertRowBelow": "Insert Row Below",
            "dxHtmlEditor-insertColumnLeft": "Insert Column Left",
            "dxHtmlEditor-insertColumnRight": "Insert Column Right",
            "dxHtmlEditor-deleteColumn": "Delete Column",
            "dxHtmlEditor-deleteRow": "Delete Row",
            "dxHtmlEditor-deleteTable": "Delete Table",
            "dxHtmlEditor-cellProperties": "Cell Properties",
            "dxHtmlEditor-tableProperties": "Table Properties",
            "dxHtmlEditor-insert": "Insert",
            "dxHtmlEditor-delete": "Delete",
            "dxHtmlEditor-border": "Border",
            "dxHtmlEditor-style": "Style",
            "dxHtmlEditor-width": "Width",
            "dxHtmlEditor-height": "Height",
            "dxHtmlEditor-borderColor": "Color",
            "dxHtmlEditor-tableBackground": "Background",
            "dxHtmlEditor-dimensions": "Dimensions",
            "dxHtmlEditor-alignment": "Alignment",
            "dxHtmlEditor-horizontal": "Horizontal",
            "dxHtmlEditor-vertical": "Vertical",
            "dxHtmlEditor-paddingVertical": "Vertical Padding",
            "dxHtmlEditor-paddingHorizontal": "Horizontal Padding",
            "dxHtmlEditor-pixels": "Pixels",
            "dxHtmlEditor-list": "List",
            "dxHtmlEditor-ordered": "Ordered",
            "dxHtmlEditor-bullet": "Bullet",
            "dxHtmlEditor-align": "Align",
            "dxHtmlEditor-center": "Center",
            "dxHtmlEditor-left": "Left",
            "dxHtmlEditor-right": "Right",
            "dxHtmlEditor-indent": "Indent",
            "dxHtmlEditor-justify": "Justify",
            "dxFileManager-newDirectoryName": "Neimenovana mapa",
            "dxFileManager-rootDirectoryName": "Files",
            "dxFileManager-errorNoAccess": "Dostop zavrnjen. Operacija ne more biti kon\u010dana.",
            "dxFileManager-errorDirectoryExistsFormat": "Mapa '{0}' \u017ee obstaja.",
            "dxFileManager-errorFileExistsFormat": "Datoteka '{0}' \u017ee obstaja.",
            "dxFileManager-errorFileNotFoundFormat": "Datoteka '{0}' ni bila najdena",
            "dxFileManager-errorDirectoryNotFoundFormat": "Directory '{0}' not found.",
            "dxFileManager-errorWrongFileExtension": "File extension is not allowed.",
            "dxFileManager-errorMaxFileSizeExceeded": "File size exceeds the maximum allowed size.",
            "dxFileManager-errorInvalidSymbols": "This name contains invalid characters.",
            "dxFileManager-errorDefault": "Neznana napaka.",
            "dxFileManager-errorDirectoryOpenFailed": "The directory cannot be opened",
            "dxFileManager-commandCreate": "New directory",
            "dxFileManager-commandRename": "Rename",
            "dxFileManager-commandMove": "Move to",
            "dxFileManager-commandCopy": "Copy to",
            "dxFileManager-commandDelete": "Delete",
            "dxFileManager-commandDownload": "Download",
            "dxFileManager-commandUpload": "Upload files",
            "dxFileManager-commandRefresh": "Refresh",
            "dxFileManager-commandThumbnails": "Thumbnails View",
            "dxFileManager-commandDetails": "Details View",
            "dxFileManager-commandClearSelection": "Clear selection",
            "dxFileManager-commandShowNavPane": "Toggle navigation pane",
            "dxFileManager-dialogDirectoryChooserMoveTitle": "Move to",
            "dxFileManager-dialogDirectoryChooserMoveButtonText": "Move",
            "dxFileManager-dialogDirectoryChooserCopyTitle": "Copy to",
            "dxFileManager-dialogDirectoryChooserCopyButtonText": "Copy",
            "dxFileManager-dialogRenameItemTitle": "Rename",
            "dxFileManager-dialogRenameItemButtonText": "Save",
            "dxFileManager-dialogCreateDirectoryTitle": "New directory",
            "dxFileManager-dialogCreateDirectoryButtonText": "Create",
            "dxFileManager-dialogDeleteItemTitle": "Delete",
            "dxFileManager-dialogDeleteItemButtonText": "Delete",
            "dxFileManager-dialogDeleteItemSingleItemConfirmation": "Are you sure you want to delete {0}?",
            "dxFileManager-dialogDeleteItemMultipleItemsConfirmation": "Are you sure you want to delete {0} items?",
            "dxFileManager-dialogButtonCancel": "Cancel",
            "dxFileManager-editingCreateSingleItemProcessingMessage": "Creating a directory inside {0}",
            "dxFileManager-editingCreateSingleItemSuccessMessage": "Created a directory inside {0}",
            "dxFileManager-editingCreateSingleItemErrorMessage": "Directory was not created",
            "dxFileManager-editingCreateCommonErrorMessage": "Directory was not created",
            "dxFileManager-editingRenameSingleItemProcessingMessage": "Renaming an item inside {0}",
            "dxFileManager-editingRenameSingleItemSuccessMessage": "Renamed an item inside {0}",
            "dxFileManager-editingRenameSingleItemErrorMessage": "Item was not renamed",
            "dxFileManager-editingRenameCommonErrorMessage": "Item was not renamed",
            "dxFileManager-editingDeleteSingleItemProcessingMessage": "Deleting an item from {0}",
            "dxFileManager-editingDeleteMultipleItemsProcessingMessage": "Deleting {0} items from {1}",
            "dxFileManager-editingDeleteSingleItemSuccessMessage": "Deleted an item from {0}",
            "dxFileManager-editingDeleteMultipleItemsSuccessMessage": "Deleted {0} items from {1}",
            "dxFileManager-editingDeleteSingleItemErrorMessage": "Item was not deleted",
            "dxFileManager-editingDeleteMultipleItemsErrorMessage": "{0} items were not deleted",
            "dxFileManager-editingDeleteCommonErrorMessage": "Some items were not deleted",
            "dxFileManager-editingMoveSingleItemProcessingMessage": "Moving an item to {0}",
            "dxFileManager-editingMoveMultipleItemsProcessingMessage": "Moving {0} items to {1}",
            "dxFileManager-editingMoveSingleItemSuccessMessage": "Moved an item to {0}",
            "dxFileManager-editingMoveMultipleItemsSuccessMessage": "Moved {0} items to {1}",
            "dxFileManager-editingMoveSingleItemErrorMessage": "Item was not moved",
            "dxFileManager-editingMoveMultipleItemsErrorMessage": "{0} items were not moved",
            "dxFileManager-editingMoveCommonErrorMessage": "Some items were not moved",
            "dxFileManager-editingCopySingleItemProcessingMessage": "Copying an item to {0}",
            "dxFileManager-editingCopyMultipleItemsProcessingMessage": "Copying {0} items to {1}",
            "dxFileManager-editingCopySingleItemSuccessMessage": "Copied an item to {0}",
            "dxFileManager-editingCopyMultipleItemsSuccessMessage": "Copied {0} items to {1}",
            "dxFileManager-editingCopySingleItemErrorMessage": "Item was not copied",
            "dxFileManager-editingCopyMultipleItemsErrorMessage": "{0} items were not copied",
            "dxFileManager-editingCopyCommonErrorMessage": "Some items were not copied",
            "dxFileManager-editingUploadSingleItemProcessingMessage": "Uploading an item to {0}",
            "dxFileManager-editingUploadMultipleItemsProcessingMessage": "Uploading {0} items to {1}",
            "dxFileManager-editingUploadSingleItemSuccessMessage": "Uploaded an item to {0}",
            "dxFileManager-editingUploadMultipleItemsSuccessMessage": "Uploaded {0} items to {1}",
            "dxFileManager-editingUploadSingleItemErrorMessage": "Item was not uploaded",
            "dxFileManager-editingUploadMultipleItemsErrorMessage": "{0} items were not uploaded",
            "dxFileManager-editingUploadCanceledMessage": "Canceled",
            "dxFileManager-editingDownloadSingleItemErrorMessage": "Item was not downloaded",
            "dxFileManager-editingDownloadMultipleItemsErrorMessage": "{0} items were not downloaded",
            "dxFileManager-listDetailsColumnCaptionName": "Name",
            "dxFileManager-listDetailsColumnCaptionDateModified": "Date Modified",
            "dxFileManager-listDetailsColumnCaptionFileSize": "File Size",
            "dxFileManager-listThumbnailsTooltipTextSize": "Size",
            "dxFileManager-listThumbnailsTooltipTextDateModified": "Date Modified",
            "dxFileManager-notificationProgressPanelTitle": "Progress",
            "dxFileManager-notificationProgressPanelEmptyListText": "No operations",
            "dxFileManager-notificationProgressPanelOperationCanceled": "Canceled",
            "dxDiagram-categoryGeneral": "General",
            "dxDiagram-categoryFlowchart": "Flowchart",
            "dxDiagram-categoryOrgChart": "Org Chart",
            "dxDiagram-categoryContainers": "Containers",
            "dxDiagram-categoryCustom": "Custom",
            "dxDiagram-commandExportToSvg": "Export to SVG",
            "dxDiagram-commandExportToPng": "Export to PNG",
            "dxDiagram-commandExportToJpg": "Export to JPEG",
            "dxDiagram-commandUndo": "Undo",
            "dxDiagram-commandRedo": "Redo",
            "dxDiagram-commandFontName": "Font Name",
            "dxDiagram-commandFontSize": "Font Size",
            "dxDiagram-commandBold": "Bold",
            "dxDiagram-commandItalic": "Italic",
            "dxDiagram-commandUnderline": "Underline",
            "dxDiagram-commandTextColor": "Font Color",
            "dxDiagram-commandLineColor": "Line Color",
            "dxDiagram-commandLineWidth": "Line Width",
            "dxDiagram-commandLineStyle": "Line Style",
            "dxDiagram-commandLineStyleSolid": "Solid",
            "dxDiagram-commandLineStyleDotted": "Dotted",
            "dxDiagram-commandLineStyleDashed": "Dashed",
            "dxDiagram-commandFillColor": "Fill Color",
            "dxDiagram-commandAlignLeft": "Align Left",
            "dxDiagram-commandAlignCenter": "Align Center",
            "dxDiagram-commandAlignRight": "Align Right",
            "dxDiagram-commandConnectorLineType": "Connector Line Type",
            "dxDiagram-commandConnectorLineStraight": "Straight",
            "dxDiagram-commandConnectorLineOrthogonal": "Orthogonal",
            "dxDiagram-commandConnectorLineStart": "Connector Line Start",
            "dxDiagram-commandConnectorLineEnd": "Connector Line End",
            "dxDiagram-commandConnectorLineNone": "None",
            "dxDiagram-commandConnectorLineArrow": "Arrow",
            "dxDiagram-commandFullscreen": "Full Screen",
            "dxDiagram-commandUnits": "Units",
            "dxDiagram-commandPageSize": "Page Size",
            "dxDiagram-commandPageOrientation": "Page Orientation",
            "dxDiagram-commandPageOrientationLandscape": "Landscape",
            "dxDiagram-commandPageOrientationPortrait": "Portrait",
            "dxDiagram-commandPageColor": "Page Color",
            "dxDiagram-commandShowGrid": "Show Grid",
            "dxDiagram-commandSnapToGrid": "Snap to Grid",
            "dxDiagram-commandGridSize": "Grid Size",
            "dxDiagram-commandZoomLevel": "Zoom Level",
            "dxDiagram-commandAutoZoom": "Auto Zoom",
            "dxDiagram-commandFitToContent": "Fit to Content",
            "dxDiagram-commandFitToWidth": "Fit to Width",
            "dxDiagram-commandAutoZoomByContent": "Auto Zoom by Content",
            "dxDiagram-commandAutoZoomByWidth": "Auto Zoom by Width",
            "dxDiagram-commandSimpleView": "Simple View",
            "dxDiagram-commandCut": "Cut",
            "dxDiagram-commandCopy": "Copy",
            "dxDiagram-commandPaste": "Paste",
            "dxDiagram-commandSelectAll": "Select All",
            "dxDiagram-commandDelete": "Delete",
            "dxDiagram-commandBringToFront": "Bring to Front",
            "dxDiagram-commandSendToBack": "Send to Back",
            "dxDiagram-commandLock": "Lock",
            "dxDiagram-commandUnlock": "Unlock",
            "dxDiagram-commandInsertShapeImage": "Insert Image...",
            "dxDiagram-commandEditShapeImage": "Change Image...",
            "dxDiagram-commandDeleteShapeImage": "Delete Image",
            "dxDiagram-commandLayoutLeftToRight": "Left-to-right",
            "dxDiagram-commandLayoutRightToLeft": "Right-to-left",
            "dxDiagram-commandLayoutTopToBottom": "Top-to-bottom",
            "dxDiagram-commandLayoutBottomToTop": "Bottom-to-top",
            "dxDiagram-unitIn": "in",
            "dxDiagram-unitCm": "cm",
            "dxDiagram-unitPx": "px",
            "dxDiagram-dialogButtonOK": "OK",
            "dxDiagram-dialogButtonCancel": "Cancel",
            "dxDiagram-dialogInsertShapeImageTitle": "Insert Image",
            "dxDiagram-dialogEditShapeImageTitle": "Change Image",
            "dxDiagram-dialogEditShapeImageSelectButton": "Select image",
            "dxDiagram-dialogEditShapeImageLabelText": "or drop a file here",
            "dxDiagram-uiExport": "Export",
            "dxDiagram-uiProperties": "Properties",
            "dxDiagram-uiSettings": "Settings",
            "dxDiagram-uiShowToolbox": "Show Toolbox",
            "dxDiagram-uiSearch": "Search",
            "dxDiagram-uiStyle": "Style",
            "dxDiagram-uiLayout": "Layout",
            "dxDiagram-uiLayoutTree": "Tree",
            "dxDiagram-uiLayoutLayered": "Layered",
            "dxDiagram-uiDiagram": "Diagram",
            "dxDiagram-uiText": "Text",
            "dxDiagram-uiObject": "Object",
            "dxDiagram-uiConnector": "Connector",
            "dxDiagram-uiPage": "Page",
            "dxDiagram-shapeText": "Text",
            "dxDiagram-shapeRectangle": "Rectangle",
            "dxDiagram-shapeEllipse": "Ellipse",
            "dxDiagram-shapeCross": "Cross",
            "dxDiagram-shapeTriangle": "Triangle",
            "dxDiagram-shapeDiamond": "Diamond",
            "dxDiagram-shapeHeart": "Heart",
            "dxDiagram-shapePentagon": "Pentagon",
            "dxDiagram-shapeHexagon": "Hexagon",
            "dxDiagram-shapeOctagon": "Octagon",
            "dxDiagram-shapeStar": "Star",
            "dxDiagram-shapeArrowLeft": "Left Arrow",
            "dxDiagram-shapeArrowUp": "Up Arrow",
            "dxDiagram-shapeArrowRight": "Right Arrow",
            "dxDiagram-shapeArrowDown": "Down Arrow",
            "dxDiagram-shapeArrowUpDown": "Up Down Arrow",
            "dxDiagram-shapeArrowLeftRight": "Left Right Arrow",
            "dxDiagram-shapeProcess": "Process",
            "dxDiagram-shapeDecision": "Decision",
            "dxDiagram-shapeTerminator": "Terminator",
            "dxDiagram-shapePredefinedProcess": "Predefined Process",
            "dxDiagram-shapeDocument": "Document",
            "dxDiagram-shapeMultipleDocuments": "Multiple Documents",
            "dxDiagram-shapeManualInput": "Manual Input",
            "dxDiagram-shapePreparation": "Preparation",
            "dxDiagram-shapeData": "Data",
            "dxDiagram-shapeDatabase": "Database",
            "dxDiagram-shapeHardDisk": "Hard Disk",
            "dxDiagram-shapeInternalStorage": "Internal Storage",
            "dxDiagram-shapePaperTape": "Paper Tape",
            "dxDiagram-shapeManualOperation": "Manual Operation",
            "dxDiagram-shapeDelay": "Delay",
            "dxDiagram-shapeStoredData": "Stored Data",
            "dxDiagram-shapeDisplay": "Display",
            "dxDiagram-shapeMerge": "Merge",
            "dxDiagram-shapeConnector": "Connector",
            "dxDiagram-shapeOr": "Or",
            "dxDiagram-shapeSummingJunction": "Summing Junction",
            "dxDiagram-shapeContainerDefaultText": "Container",
            "dxDiagram-shapeVerticalContainer": "Vertical Container",
            "dxDiagram-shapeHorizontalContainer": "Horizontal Container",
            "dxDiagram-shapeCardDefaultText": "Person's Name",
            "dxDiagram-shapeCardWithImageOnLeft": "Card with Image on the Left",
            "dxDiagram-shapeCardWithImageOnTop": "Card with Image on the Top",
            "dxDiagram-shapeCardWithImageOnRight": "Card with Image on the Right",
            "dxGantt-dialogTitle": "Title",
            "dxGantt-dialogStartTitle": "Start",
            "dxGantt-dialogEndTitle": "End",
            "dxGantt-dialogProgressTitle": "Progress",
            "dxGantt-dialogResourcesTitle": "Resources",
            "dxGantt-dialogResourceManagerTitle": "Resource Manager",
            "dxGantt-dialogTaskDetailsTitle": "Task Details",
            "dxGantt-dialogEditResourceListHint": "Edit Resource List",
            "dxGantt-dialogEditNoResources": "No resources",
            "dxGantt-dialogButtonAdd": "Add",
            "dxGantt-contextMenuNewTask": "New Task",
            "dxGantt-contextMenuNewSubtask": "New Subtask",
            "dxGantt-contextMenuDeleteTask": "Delete Task",
            "dxGantt-contextMenuDeleteDependency": "Delete Dependency",
            "dxGantt-dialogTaskDeleteConfirmation": "Deleting a task also deletes all its dependencies and subtasks. Are you sure you want to delete this task?",
            "dxGantt-dialogDependencyDeleteConfirmation": "Are you sure you want to delete the dependency from the task?",
            "dxGantt-dialogResourcesDeleteConfirmation": "Deleting a resource also deletes it from tasks to which this resource is assigned. Are you sure you want to delete these resources? Resources: {0}",
            "dxGantt-dialogConstraintCriticalViolationMessage": "The task you are attempting to move is linked to a second task by a dependency relation. This change would conflict with dependency rules. How would you like to proceed?",
            "dxGantt-dialogConstraintViolationMessage": "The task you are attempting to move is linked to a second task by a dependency relation. How would you like to proceed?",
            "dxGantt-dialogCancelOperationMessage": "Cancel the operation",
            "dxGantt-dialogDeleteDependencyMessage": "Delete the dependency",
            "dxGantt-dialogMoveTaskAndKeepDependencyMessage": "Move the task and keep the dependency",
            "dxGantt-dialogConstraintCriticalViolationSeveralTasksMessage": "The task you are attempting to move is linked to another tasks by dependency relations. This change would conflict with dependency rules. How would you like to proceed?",
            "dxGantt-dialogConstraintViolationSeveralTasksMessage": "The task you are attempting to move is linked to another tasks by dependency relations. How would you like to proceed?",
            "dxGantt-dialogDeleteDependenciesMessage": "Delete the dependency relations",
            "dxGantt-dialogMoveTaskAndKeepDependenciesMessage": "Move the task and keep the dependencies",
            "dxGantt-undo": "Undo",
            "dxGantt-redo": "Redo",
            "dxGantt-expandAll": "Expand All",
            "dxGantt-collapseAll": "Collapse All",
            "dxGantt-addNewTask": "Add New Task",
            "dxGantt-deleteSelectedTask": "Delete Selected Task",
            "dxGantt-zoomIn": "Zoom In",
            "dxGantt-zoomOut": "Zoom Out",
            "dxGantt-fullScreen": "Full Screen",
            "dxGantt-quarter": "Q{0}",
            "dxGantt-sortingAscendingText": "Razvrsti nara\u0161\u010dajo\u010de",
            "dxGantt-sortingDescendingText": "Razvrsti padajo\u010de",
            "dxGantt-sortingClearText": "Brez razvr\u0161\u010danja",
            "dxGantt-showResources": "Show Resources",
            "dxGantt-showDependencies": "Show Dependencies",
            "dxGantt-dialogStartDateValidation": "Start date must be after {0}",
            "dxGantt-dialogEndDateValidation": "End date must be after {0}"
        }
    })
}));
