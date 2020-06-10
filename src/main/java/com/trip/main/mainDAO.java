package com.trip.main;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Service;

//@Repository("mainDAO")
@Service("mainDAO")
public class mainDAO {
	
	private SqlSessionTemplate sqlSession;
}
