package com.trip.common;

import java.sql.SQLException;
import java.util.List;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service("commonDAO")
public class commonDAO {
	
	@Autowired
	private SqlSessionTemplate sqlSession;
	
	public List<hashTag> selectTagList() throws SQLException {
		return sqlSession.selectList("selectHashtag");
	}
	
}
