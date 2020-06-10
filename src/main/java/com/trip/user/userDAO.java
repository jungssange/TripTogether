package com.trip.user;

import java.sql.SQLException;
import java.util.List;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service("userDAO")
public class userDAO {
	
	@Autowired
	private SqlSessionTemplate sqlSession;
	
    public List<userDO> selectUserList() throws SQLException {
    	List<userDO> list = sqlSession.selectList("selectUserList"); 
        return list;
    }
}
