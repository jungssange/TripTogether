function SetWebEditor(editor, editor_height) {
	xed = new xq.Editor(editor);
	xed.config.imagePathForDefaultToolbar = 'js/xquared/images/toolbar/ko/';
	xed.config.lang = 'ko';
	xed.config.defaultToolbarButtonGroups = {
				"color": [
				xed.config.defaultToolbarButtons.foregroundColor,
				xed.config.defaultToolbarButtons.backgroundColor
				],
				"font": [
				xed.config.defaultToolbarButtons.fontFace,
				xed.config.defaultToolbarButtons.fontSize
				],
				"link": [
				xed.config.defaultToolbarButtons.link,
				xed.config.defaultToolbarButtons.removeLink
				],
				"style": [
				xed.config.defaultToolbarButtons.strongEmphasis,
				xed.config.defaultToolbarButtons.emphasis,
				xed.config.defaultToolbarButtons.underline,
				xed.config.defaultToolbarButtons.strike,
				xed.config.defaultToolbarButtons.superscription,
				xed.config.defaultToolbarButtons.subscription,
				xed.config.defaultToolbarButtons.removeFormat
				],
				"justification": [
				xed.config.defaultToolbarButtons.justifyLeft,
				xed.config.defaultToolbarButtons.justifyCenter,
				xed.config.defaultToolbarButtons.justifyRight,
				xed.config.defaultToolbarButtons.justifyBoth
				],
				"indentation": [
				xed.config.defaultToolbarButtons.indent,
				xed.config.defaultToolbarButtons.outdent
				],
				"block": [
				xed.config.defaultToolbarButtons.unorderedList,
				xed.config.defaultToolbarButtons.orderedList
				],
				"insert": [
				xed.config.defaultToolbarButtons.table,
				xed.config.defaultToolbarButtons.character,
				xed.config.defaultToolbarButtons.emoticon 
				],
				"html": [
				xed.config.defaultToolbarButtons.html
				],
				"undo": [
				xed.config.defaultToolbarButtons.undo,
				xed.config.defaultToolbarButtons.redo
				]
	};		
	xed.config.defaultToolbarButtonMap = [
		xed.config.defaultToolbarButtonGroups.font,
		xed.config.defaultToolbarButtonGroups.color,
		xed.config.defaultToolbarButtonGroups.style,
		xed.config.defaultToolbarButtonGroups.justification,
		xed.config.defaultToolbarButtonGroups.indentation,
		xed.config.defaultToolbarButtonGroups.insert,
		xed.config.defaultToolbarButtonGroups.block,
		xed.config.defaultToolbarButtonGroups.undo
	];
	xed.addPlugin('FileUpload');
	xed.setFileUploadTarget('', 'editorFileUpload.dmn');
	xq.ui_templates.basicMultiFileUploadDialog= '<form id="multiFileUploadDialog" class="xqFormDialog modal" method="post" enctype="multipart/form-data">\n		<h3>이미지 삽입</h3>\n		<div class="dialog-content">\n			<div id="fileUploadContainer" class="attachment-section">\n				<p>한 파일당 최대 <strong>20MB</strong>까지 올릴 수 있고,<br/>한 번에 여러 개의 파일을 첨부할 수 있습니다.</p>\n				<div class="dialog-buttons upload-buttons"><div id="MultiFileUploaderDiv"></div></div>\n			</div>\n			<div id="fileListContainer" class="attachment-section">\n			</div>\n			<div class="dialog-buttons">\n				<a href="#" class="button-white cancel">닫기</a>\n				<a href="#" class="button-gray submit">삽입</a>\n			</div>\n			<p class="noti">\n				</p>\n		</div>\n		<a href="#" class="cancel close-dialog"><img src="js/xquared/images/dialogs/icon_close.gif" alt="Close" /></a>\n		<div id="MultiFileUploader"></div>\n	</form>';

	xed.setEditMode('wysiwyg');
	if (editor_height>0) xed.setHeight(editor_height+"px");
	xed.setWidth("100%");
	
	return xed;
};