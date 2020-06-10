if(!xq) xq = {};
if(!xq.ui_templates) xq.ui_templates = {};

xq.ui_templates.basicColorPickerDialog='<form action="#" class="xqFormDialog xqBasicColorPickerDialog">\n		<div>\n			<label>\n				<input type="radio" class="initialFocus" name="color" value="black" checked="checked" />\n				<span style="color: black;">Black</span>\n			</label>\n			<label>\n				<input type="radio" name="color" value="red" />\n				<span style="color: red;">Red</span>\n			</label>\n				<input type="radio" name="color" value="yellow" />\n				<span style="color: yellow;">Yellow</span>\n			</label>\n			</label>\n				<input type="radio" name="color" value="pink" />\n				<span style="color: pink;">Pink</span>\n			</label>\n			<label>\n				<input type="radio" name="color" value="blue" />\n				<span style="color: blue;">Blue</span>\n			</label>\n			<label>\n				<input type="radio" name="color" value="green" />\n				<span style="color: green;">Green</span>\n			</label>\n			\n			<input type="submit" value="Ok" />\n			<input type="button" class="cancel" value="Cancel" />\n		</div>\n	</form>';
if(!xq) xq = {};
if(!xq.ui_templates) xq.ui_templates = {};

xq.ui_templates.basicFileUploadDialog='<form id="fileUploadDialog" class="xqFormDialog modal" method="post" enctype="multipart/form-data" target="uploadTarget" action="">\n		<h3>Upload image</h3>\n		<div class="dialog-content">\n			<div class="attachment-section">\n				<label class="label" for="searchAttachFile">Find a file</label><input type="file" class="type-text" id="searchAttachFile" name="FileData" />\n			</div>\n			<div class="dialog-buttons">\n				<a href="#" class="button-white cancel">Close</a>\n				<a href="#" class="button-gray submit">Insert</a>\n			</div>\n		</div>\n		<iframe id="uploadTarget" name="uploadTarget" src="" style="width:0;height:0;border:0px solid #fff;"></iframe>\n		<a href="#" class="cancel close-dialog"><img src="js/xquared/images/dialogs/icon_close.gif" alt="Close" /></a>\n	</form>';
if(!xq) xq = {};
if(!xq.ui_templates) xq.ui_templates = {};

xq.ui_templates.basicIFrameDialog='<form id="iframeDialog" class="xqFormDialog modal">\n		<h3>Insert IFrame</h3>\n		<div class="dialog-content">\n			<p>IFrame src: <input type="text" class="initialFocus type-text" name="p_src" size="36" value="http://" /></p>\n			<p>Width: <input type="text" class="type-text" name="p_width" size="6" value="320" /></p>\n			<p>Height: <input type="text" class="type-text" name="p_height" size="6" value="200" /></p>\n			<p>Frame border:\n				<select name="p_frameborder">\n					<option value="0" selected="selected">No</option>\n					<option value="1">Yes</option>\n				</select></p>\n			<p>Scrolling: \n				<select name="p_scrolling">\n					<option value="0">No</option>\n					<option value="1" selected="selected">Yes</option>\n				</select></p>\n			<p>ID(optional): <input type="text" class="type-text" name="p_id" size="24" value="" /></p>\n			<p>Class(optional): <input type="text" class="type-text" name="p_class" size="24" value="" /></p>\n			\n			<div class="dialog-buttons">\n				<a href="#" class="button-white cancel">Close</a>\n				<a href="#" class="button-gray submit">Insert</a>\n			</div>\n		</div>\n		<a href="#" class="cancel close-dialog"><img src="js/xquared/images/dialogs/icon_close.gif" alt="close" /></a>\n	</form>';
if(!xq) xq = {};
if(!xq.ui_templates) xq.ui_templates = {};

xq.ui_templates.basicLinkDialog='<form id="linkDialog" class="xqFormDialog modal" action="#">\n		<h3>Insert Link</h3>\n		<div class="dialog-content">\n			<p>Please enter the URL and label.</p>\n			<input type="text" name="url" class="type-text" value="http://" />\n			<input type="text" name="text" class="type-text" value="" />\n			<div class="dialog-buttons">\n				<a href="#" class="button-white cancel">Cancel</a>\n				<a href="#" class="button-gray submit">Create</a>\n			</div>\n		</div>\n		<a href="#" class="cancel close-dialog"><img src="js/xquared/images/dialogs/icon_close.gif" alt="close" /></a>\n	</form>';
if(!xq) xq = {};
if(!xq.ui_templates) xq.ui_templates = {};

xq.ui_templates.basicMovieDialog='<form id="videoDialog" class="xqFormDialog modal">\n		<h3>Insert Movie</h3>\n		<div class="dialog-content">\n			<p>Insert an Embed code to add a movie clip from YouTube, Yahoo video, vimeo and slideshare.</p>\n			<textarea class="initialFocus" name="html"></textarea>\n			<div class="dialog-buttons">\n				<a href="#" class="button-white cancel">Close</a>\n				<a href="#" class="button-gray submit">Insert</a>\n			</div>\n		</div>\n		<a href="#" class="cancel close-dialog"><img src="js/xquared/images/dialogs/icon_close.gif" alt="close" /></a>\n	</form>';
if(!xq) xq = {};
if(!xq.ui_templates) xq.ui_templates = {};

xq.ui_templates.basicMultiFileUploadDialog='<form id="multiFileUploadDialog" class="xqFormDialog modal" method="post" enctype="multipart/form-data">\n		<h3>Upload image</h3>\n		<div class="dialog-content">\n			<div id="fileUploadContainer" class="attachment-section">\n				<p>\n					You can insert more than one file at once.\n					A file up to <strong>20MB</strong> can be uploaded. Please use the Ctrl key on PC and the Command(Apple) key on Mac to select multiple files.\n				</p>\n				<div class="dialog-buttons upload-buttons"><div id="MultiFileUploaderDiv"></div></div>\n			</div>\n			<div id="fileListContainer" class="attachment-section">\n			</div>\n			<div class="dialog-buttons">\n				<a href="#" class="button-white cancel">Close</a>\n				<a href="#" class="button-gray submit">Insert</a>\n			</div>\n			<p class="noti">\n				Adobe Flash is required to insert multiple files. <span><a href="#" onclick="xed.fileUploadController.openDialog(true)">Click here to upload files without Adobe Flash</a></span>\n			</p>\n		</div>\n		<a href="#" class="cancel close-dialog"><img src="js/xquared/images/dialogs/icon_close.gif" alt="Close" /></a>\n		<div id="MultiFileUploader"></div>\n	</form>';
if(!xq) xq = {};
if(!xq.ui_templates) xq.ui_templates = {};

xq.ui_templates.basicScriptDialog='<form id="scriptDialog" class="xqFormDialog modal">\n		<h3>Insert Script</h3>\n		<div class="dialog-content">\n			<p>Script URL:\n			<input type="text" class="initialFocus" class="type-text" name="url" size="36" value="http://" /></p>\n			<div class="dialog-buttons">\n				<a href="#" class="button-white cancel">Close</a>\n				<a href="#" class="button-gray submit">Insert</a>\n			</div>\n		</div>\n		<a href="#" class="cancel close-dialog"><img src="js/xquared/images/dialogs/icon_close.gif" alt="close" /></a>\n	</form>';
if(!xq) xq = {};
if(!xq.ui_templates) xq.ui_templates = {};

xq.ui_templates.basicTableDialog='<form id="tableDialog" class="xqFormDialog modal" action="#">\n		<h3 id="tableDialogTitle">Insert Table</h3>\n		<input type="hidden" name="tableDialogType" value="" />\n		<div class="dialog-content">\n			<fieldset class="table-type">\n				<legend>table type</legend>\n				<ul>\n					<li><a href="#" id="tableTypeDefaultValue" class="selected" onclick="xq.RichTableController.changeType(this, \'\'); return false;"><img src="js/xquared/images/dialogs/iconTable_01.gif?1214533817" alt="Untitled Table" /></a></li>\n					<li><a href="#" onclick="xq.RichTableController.changeType(this, \'t\'); return false;"><img src="js/xquared/images/dialogs/iconTable_02.gif?1214533817" alt="Column Title on top" /></a></li>\n					<li><a href="#" onclick="xq.RichTableController.changeType(this, \'l\'); return false;"><img src="js/xquared/images/dialogs/iconTable_03.gif?1214533817" alt="Column Title on left" /></a></li>\n					<li class="last-child"><a href="#" onclick="xq.RichTableController.changeType(this, \'tl\'); return false;"><img src="js/xquared/images/dialogs/iconTable_04.gif?1214533817" alt="Column Title on top and left" /></a></li>\n				</ul>\n				<input id="tableTypeField" type="hidden" name="tableType" value="" />\n			</fieldset>\n			<fieldset class="table-size">\n				<legend id="tableSizeLabel" class="font-variation">Size</legend>\n				<div class="wrapper">\n					<ul>\n						<li class="new-only">\n							<label>Row(s)</label>\n							<span class="controller"><input type="text" onchange="xq.RichTableController.previewTable(); return false;" id="tableRowsField" name="tableRows" value="3" class="type-text" /><span class="buttons"><img src="js/xquared/images/dialogs/arrow_top.gif" alt="plus" class="plus rows" onclick="xq.RichTableController.changeSize(this); return false;" /><img src="js/xquared/images/dialogs/arrow_bottom.gif" alt="minus" class="minus rows" onclick="xq.RichTableController.changeSize(this); return false;" /></span></span>\n						</li>\n						<li class="new-only">\n							<label>Column(s)</label>\n							<span class="controller"><input type="text" onchange="xq.RichTableController.previewTable(); return false;" id="tableColsField" name="tableCols" value="3" class="type-text" /><span class="buttons"><img src="js/xquared/images/dialogs/arrow_top.gif" alt="plus" class="plus cols" onclick="xq.RichTableController.changeSize(this); return false;" /><img src="js/xquared/images/dialogs/arrow_bottom.gif" alt="minus" class="minus cols" onclick="xq.RichTableController.changeSize(this); return false;" /></span></span>\n						</li>\n						<li class="table-width">\n							<label>Width</label>\n							<select class="tableWidths" onchange="xq.RichTableController.changeStyle(this); return false;">\n								<option value="fullsize">Full size</option>\n								<option value="content">Size to content</option>\n								<option value="pixel">Fixed size (pixels)</option>\n								<option value="percentage">Fixed percentage (%)</option>\n							</select>			\n							<input type="text" name="tableWidth" id="tableWidthValue" class="type-text height-box" style="display:none;" />				\n							<input type="hidden" name="tableWidthUnit" value="" id="tableWidthValueUnit" />				\n							<!--input type="checkbox" name="tableFixed" class="type-checkbox" /><label class="none font-valiation">Same cell spacing</label-->\n						</li>\n						<li class="table-height">\n							<label>Height</label>\n							<select class="tableHeights" onchange="xq.RichTableController.changeStyle(this); return false;">\n								<option selected value="content">Size to content</option>\n								<option value="pixel">Fixed size (pixels)</option>\n							</select>							\n							<input type="text" name="tableHeight" id="tableHeightValue" class="type-text height-box" style="display:none;" />\n							<input type="hidden" name="tableHeightUnit" id="tableHeightValueUnit" />\n						</li>\n					</ul>\n					<div id="previewTable" class="new-only">\n						<table>\n							<tr>\n								<td></td>\n								<td></td>\n								<td></td>\n							</tr>\n							<tr>\n								<td></td>\n								<td></td>\n								<td></td>\n							</tr>\n							<tr>\n								<td></td>\n								<td></td>\n								<td></td>\n							</tr>\n						</table>\n					</div>\n				</div>\n			</fieldset>\n			<fieldset class="table-alignment">\n				<legend class="font-variation">Alignment</legend>\n				<div class="wrapper">\n					<ul>\n						<li>\n							<label>Horizontal</label>\n							<select name="tableHorizontalAlign">\n								<option value="left">Left</option>\n								<option value="center">Center</option>\n								<option value="right">Right</option>\n							</select>\n						</li>\n						<li>\n							<label>Vertical</label>\n							<select name="tableVerticalAlign">\n								<option value="top">Top</option>\n								<option value="middle">Middle</option>\n								<option value="bottom">Bottom</option>\n							</select>\n						</li>\n					</ul>\n				</div>\n			</fieldset>\n			<fieldset class="table-border">\n				<legend class="font-variation">Border</legend>\n				<div class="wrapper button-style03">\n					<ul>\n						<li class="weight-li">\n							<label>Size</label><span class="controller"><input type="text" name="tableBorderSize" value="0" class="type-text" /><span class="buttons"><img src="js/xquared/images/dialogs/arrow_top.gif" alt="" class="plus border" onclick="xq.RichTableController.changeSize(this); return false;" /><img src="js/xquared/images/dialogs/arrow_bottom.gif" alt="" class="minus border" onclick="xq.RichTableController.changeSize(this); return false;" /></span></span>\n						</li>\n						<li class="color-li">\n							<label>color</label>\n							<span class="color">\n								<a href="#" id="borderColorBoard" class="tableDialog border" onclick="xq.RichTableController.showColorPicker(this); return false;">&nbsp;</a>\n							</span>\n							<a href="#" class="tableDialog" onclick="xq.RichTableController.showColorPicker(this); return false;" title="search"><img src="js/xquared/images/dialogs/arrow06.gif" alt="search" class="search-color" /></a>\n							<input id="borderColorCode" type="hidden" name="tableBorderColor" value="#000000" />\n						</li>\n					</ul>\n				</div>\n			</fieldset>\n			<fieldset class="table-background">\n				<legend class="font-variation">Background</legend>\n				<div class="wrapper button-style03">\n					<ul>\n						<li>\n							<label>color</label>\n							<span class="color">\n								<a href="#" id="backgroundColorBoard" class="tableDialog background" onclick="xq.RichTableController.showColorPicker(this); return false;">&nbsp;</a>\n							</span>\n							<a href="#" class="tableDialog" onclick="xq.RichTableController.showColorPicker(this); return false;" title="search"><img src="js/xquared/images/dialogs/arrow06.gif" alt="search" class="search-color" /></a>\n							<input id="backgroundColorCode" type="hidden" name="tableBackgroundColor" value="#ffffff" />\n						</li>\n					</ul>\n				</div>\n			</fieldset>\n			<div class="dialog-buttons">\n				<a href="#" class="button-white cancel">Cancel</a>\n				<a href="#" class="button-gray submit" id="tableDialogSubmit">Insert</a>\n			</div>\n		</div>\n		<a href="#" class="cancel close-dialog"><img src="js/xquared/images/dialogs/icon_close.gif" alt="close" /></a>\n	</form>';
