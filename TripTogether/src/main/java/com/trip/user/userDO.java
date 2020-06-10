package com.trip.user;

public class userDO {
	private String usersq;			// 사용자SQ
	private String userid;			// 사용자ID
	private String usernm;			// 사용자명
	private String photo;			// 사용자 이미지
	private String joindate;			// 가입일
	private String address;			// 사용자 주소
	private String updatedate;	// 변경일자
	private String deleteflag;		// 삭제여부
	
	public String getUsersq() {
		return usersq;
	}
	
	public void setUsersq(String usersq) {
		this.usersq = usersq;
	}
	
	public String getUserid() {
		return userid;
	}
	
	public void setUserid(String userid) {
		this.userid = userid;
	}
	
	public String getUsernm() {
		return usernm;
	}
	
	public void setUsernm(String usernm) {
		this.usernm = usernm;
	}
	
	public String getPhoto() {
		return photo;
	}
	
	public void setPhoto(String photo) {
		this.photo = photo;
	}
	
	public String getJoindate() {
		return joindate;
	}
	
	public void setJoindate(String joindate) {
		this.joindate = joindate;
	}
	
	public String getAddress() {
		return address;
	}
	
	public void setAddress(String address) {
		this.address = address;
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
