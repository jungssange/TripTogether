package com.trip.common;

public class hashTag {
	private String tagno;		//태그 순서 번호
	private String typeno;		//게시글번호, 여행번호
	private String type;		//게시글 : B, 여행:T
	private String contents;
	private String entrydate;

	public hashTag(){}

	public String getTagno() {
		return tagno;
	}

	public void setTagno(String tagno) {
		this.tagno = tagno;
	}

	public String getTypeno() {
		return typeno;
	}

	public void setTypeno(String typeno) {
		this.typeno = typeno;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
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
	
}
