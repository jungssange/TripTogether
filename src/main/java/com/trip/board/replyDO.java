package com.trip.board;

public class replyDO {
	// BO_REPLY
	
	private String reno;		// 댓글번호
	private String brdno;		// 게시판번호
	private String contents;	// 게시판 내용
	private String entrydate;	// 등록일자
	private String updatedate;	// 수정일자
	private String deleteflag;	// 삭제여부
	
	public String getReno() {
		return reno;
	}
	
	public void setReno(String reno) {
		this.reno = reno;
	}
	
	public String getBrdno() {
		return brdno;
	}
	
	public void setBrdno(String brdno) {
		this.brdno = brdno;
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
	
	public String getDeleteflag() {
		return deleteflag;
	}
	
	public void setDeleteflag(String deleteflag) {
		this.deleteflag = deleteflag;
	}
	
}
