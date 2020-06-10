package com.trip.board;

import java.sql.SQLException;
import java.util.List;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.datasource.DataSourceTransactionManager;
import org.springframework.stereotype.Service;
import org.springframework.transaction.TransactionDefinition;
import org.springframework.transaction.TransactionStatus;
import org.springframework.transaction.support.DefaultTransactionDefinition;

import com.trip.common.hashTag;
import com.trip.common.searchParam;

@Service("boardDAO")
public class boardDAO {
	
	@Autowired
	private SqlSessionTemplate sqlSession;
	
	@Autowired
	private DataSourceTransactionManager txManager;
	
	public List<boardDO> selectBoardList(searchParam param) throws SQLException {
    	List<boardDO> list = sqlSession.selectList("selectBoardList", param);
        return list;
    }
	
	public Integer selectBoardCount(searchParam param) throws SQLException {
        return sqlSession.selectOne("selectBoardCount", param);
    }
	
	
	
	public List<boardDO> selectBoardListOn() throws SQLException {
    	List<boardDO> list = sqlSession.selectList("selectBoardListOn");
        return list;
    }
	
	public boardDO selectBoardOne(String param) throws SQLException {
        return (boardDO) sqlSession.selectOne("selectBoardOne", param);
    }
	
	public void insertBoard(boardDO param) throws Exception {
		DefaultTransactionDefinition def = new DefaultTransactionDefinition();
		def.setPropagationBehavior(TransactionDefinition.PROPAGATION_REQUIRED);
		TransactionStatus status = txManager.getTransaction(def);
	 
		try{ 
			if (param.getBrdno()!=null && !"".equals(param.getBrdno())){
				sqlSession.insert("updateBoard", param); 
			} else {
				sqlSession.insert("insertBoard", param); 
			} 
			
			//해시태그 입력 시
			if(param.getTag()!=null && !"".contentEquals(param.getTag())) {
				String tag[] = param.getTag().split("#");
				
				for(int i=0; i<tag.length; i++) {
					hashTag param1 = new hashTag();
					param1.setTypeno(param.getBrdno());
					param1.setContents(tag[i]);
					param1.setType("B");
					
					sqlSession.insert("inertTag", param1);
				}
				
				
			}
		}catch (Exception ex) {
			ex.printStackTrace();
			txManager.rollback(status); 
			throw ex; 
		} finally{ 
			txManager.commit(status); 
		}
	 }
	 
	 public void deleteBoard(String param) throws Exception {
		 DefaultTransactionDefinition def = new DefaultTransactionDefinition();
		 def.setPropagationBehavior(TransactionDefinition.PROPAGATION_REQUIRED);
		 TransactionStatus status = txManager.getTransaction(def);
	 
		 try { 
			 sqlSession.update("deleteBoard", param); 
		 }catch (Exception ex) {
			 txManager.rollback(status); 
			 throw ex; 
		 } finally{ 
			 txManager.commit(status); 
		 }
	 }
	
}
