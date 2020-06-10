<%@page import="java.util.Date"%>
<%@page import="java.util.Locale"%>
<%@page import="java.text.SimpleDateFormat"%>

<%@page import="java.io.File"%>


<%@page import="damo.common.util.CommUtil" %>
<%@ page contentType="text/html; charset=UTF-8" %>


<script type="text/javascript">
	function fileAttach(){ 
		f = document.fileform;
		fpath = f.path.value;
	    fname = f.filename.value; 
	    fcode = fpath + fname;
	    
	    try{
            //window.opener.opener.pasteHTML(fname);
            var sHTML = "<span style='color:#FF0000;'>이미지도 같은 방식으로 삽입합니다.<\/span>";
            window.opener.opener.oEditors.getById["docmemo0"].exec("PASTE_HTML", [sHTML]);
	    	
	    	window.close();
	    }catch(e){ 
//             alert(e); 
	    }
	}
	fileAttach();
	this.window.close();
</script>
