package com.trip.board;

public class boardDO {
	// BO_BOARD
	
	private String brdno;			// 寃뚯떆�뙋踰덊샇
	private String type;			// 寃뚯떆�뙋援щ텇\
	private String title;
	private String contents;		// 寃뚯떆�뙋 �궡�슜
	private String entrydate;		// �벑濡앹씪�옄
	private String updatedate;		// �닔�젙�씪�옄
	private String usernm;
	private String password;
	private String tag;
	
	public String getBrdno() {
		return brdno;
	}
	
	public void setBrdno(String brdno) {
		this.brdno = brdno;
	}
	
	public String getType() {
		return type;
	}
	
	public void setType(String type) {
		this.type = type;
	}
	
	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getContents() {
		return contents;
	}
	
	public void setContents(String contents) {
		this.contents = contents;
	}
	
	public String getEntrydate() {
		return entrydate;
	}

	public void setEntrydate(String entrydate) {
		this.entrydate = entrydate;
	}
	
	public String getUpdatedate() {
		return updatedate;
	}
	
	public void setUpdatedate(String updatedate) {
		this.updatedate = updatedate;
	}

	public String getUsernm() {
		return usernm;
	}

	public void setUsernm(String usernm) {
		this.usernm = usernm;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getTag() {
		return tag;
	}

	public void setTag(String tag) {
		this.tag = tag;
	}
	
}
