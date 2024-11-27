show databases;
CREATE DATABASE mydatabase DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;

CREATE DATABASE sesac CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
/* 
utf8 : 한글 및 영어..
utf8mb4 : utf8 보다 더 많은 문자열 저장 가능
- 이모지, 특수문자, 다국어...
 */

-- 데이터 베이스 사용 선언
USE sesac;

-- 테이블 목록 확인
SHOW TABLES;

-- 데이터 베이스 삭제
DROP DATABASE mydatabase;

###################[테이블 관련 명령어]#####################
/* 
CREATE TABLE 테이블이름(
    속성이름1 데이터타입 제약조건,
    속성이름2 데이터타입 제약조건
);
 */
--  제약조건
-- NOT NULL : null 허용 x
-- AUTO_INCREMENT: 자동 숫자 증가
-- PRIMARY KEY: 기본키 설정(중복 허용x, null 허용x)
-- DEFAULT: 기본 값 설정
-- UNIQUE: 중복 허용x, null 허용x, 한 테이블에 여러 개 설정 가능

CREATE TABLE products(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    model_number VARCHAR(15) NOT NULL,
    series VARCHAR(30) NOT NULL
);


-- 테이블 목록 확인
SHOW TABLES;

-- 테이블 구조 확인
DESC products;

DROP TABLE products;

-- 테이블 속성 수정
ALTER TABLE products ADD new_column VARCHAR(20);

ALTER TABLE products MODIFY new_column INT;

ALTER TABLE products DROP new_column;



################ [여기부터 DML] ################
-- 데이터 조작어
-- 데이터 CRUD 를 위해 사용하는 SQL 문

CREATE TABLE user(
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(10) NOT NULL,
  age INT NOT NULL,
  address VARCHAR(100)
);


-- Create >> INSERT INTO 
INSERT INTO user (name, age, address) VALUES ('김민정', 20, '서울특별시 마포구');
INSERT INTO user (name, age, address) VALUES ('이지수', 30, '서울특별시 강남구');
INSERT INTO user (name, age, address) VALUES ('최솔이', 22, '대구광역시 동구');
INSERT INTO user (name, age, address) VALUES ('한소희', 25, '부산광역시 관악구');
INSERT INTO user (name, age, address) VALUES ('정세희', 19, '서울특별시 노원구');
INSERT INTO user (name, age, address) VALUES ('이형석', 23, '서울특별시 강서구');
INSERT INTO user (name, age, address) VALUES ('김성민', 32, '부산광역시 동구');
INSERT INTO user (name, age, address) VALUES ('박수진', 37, '강원도 강릉시');
INSERT INTO user (name, age, address) VALUES ('권순모', 26, '충청남도 공주시');
INSERT INTO user (name, age, address) VALUES ('진현정', 40, '강원도 속초시');
INSERT INTO user (name, age, address) VALUES ('권희수', 36, '서울특별시 영등포구');
INSERT INTO user (name, age, address) VALUES ('최이솔', 22, '대구광역시 서구');

-- Read >> SELECT [컬럼이름] FROM [테이블 이름] (WHERE 조건)

SELECT * FROM user; -- 전체 조회
SELECT name FROM user; -- 특정 컬럼 전체 조회
SELECT age, name FROM user; -- 특정 컬럼 2개 전체 조회

-- where 절을 이용해서 조건 걸기
SELECT * FROM user WHERE age>=25; -- 이상

SELECT * FROM user WHERE id=3; -- 일치 비교
SELECT id, age FROM user WHERE name="권순모";

-- LIKE 패턴 조회 --
SELECT * FROM user WHERE address LIKE "%서울%"; -- 서울로 시작하는 주소값

SELECT * FROM user WHERE name LIKE "__희"; -- 마지막 글자가 "희"인 사람
SELECT * FROM user WHERE name LIKE "%희%"; -- 이름에 "희"가 들어가는 사람

SELECT * FROM user WHERE address LIKE "%광역시%" -- 광역시 주소인 사람

-- IN(list) --
SELECT * FROM user WHERE age IN(20,21,22,23); -- 나이가 20~23살 중 하나

-- BETWEEn a AND b --
SELECT * FROM user WHERE age BETWEEN 25 AND 30; -- 나이가 25 이상 30살 이하

-- IS NULL, IS NOT NULL --
INSERT INTO user(name, age) VALUES("서현승",28);

SELECT * FROM user WHERE address IS NULL; -- 주소가 null 인 사람 조회
SELECT * FROM user WHERE address IS NOT NULL; -- 주소가 null 이 아닌 사람 조회

-- 논리 연산자
-- 주소가 null 이 아니면서, age가 25 초과인 전체 속성 (AND)
SELECT * FROM user WHERE address IS NOT NULL AND age > 25;
-- 최씨이고, 나이가 22인 사람 (AND)
SELECT * FROM user WHERE name LIKE "최%" AND age=22;
-- 서울에 살거나 김씨인 사람 (OR)
SELECT * FROM user WHERE address LIKE "서울%" OR name LIKE "김%";



-- order by, distinct, limit --
SELECT * FROM user ORDER BY age DESC; -- age 기준으로 내림차순 정렬
SELECT * FROM user WHERE id>6 ORDER BY age ASC; -- id가 6보다 큰 것을 조회하고 난 후, age 기준으로 오름차순 정렬

-- distinct --
SELECT age from user ORDER BY age ASC;
SELECT DISTINCT age FROM user ORDER BY age ASC;

-- 서울시에 사는 사람의 이름만, 2개만.. --
SELECT name, address FROM user WHERE address LIKE "서울%" ORDER BY name ASC LIMIT 2;



#### 실습1 DDL ####

CREATE DATABASE dobong;
use dobong;
CREATE TABLE member(
  id VARCHAR(20) NOT NULL PRIMARY KEY,
  name VARCHAR(5) NOT NULL,
  age INT,
  gender VARCHAR(2) NOT NULL,
  email VARCHAR(50),
  promotion VARCHAR(2)
);
DESC member;

#### 실습2 DDL ####
ALTER TABLE member MODIFY id VARCHAR(10);
ALTER TABLE member DROP COLUMN age;
ALTER TABLE member ADD interest VARCHAR(100);

#### 실습3 CREATE 문 ####
CREATE TABLE user(
  id VARCHAR(10) NOT NULL PRIMARY KEY,
  pw VARCHAR(20) NOT NULL,
  name VARCHAR(5) NOT NULL,
  gender ENUM("F","M","") DEFAULT "",
  birthday DATE NOT NULL,
  age INT(3) NOT NULL DEFAULT 0
);

DESC user;

#### 실습4 INSERT 문 ####
INSERT INTO user (id, pw, name, gender, birthday, age) VALUES("hong1234","8o4bg","홍길동","M","1990-01-31",33);
INSERT INTO user (id, pw, name, gender, birthday, age) VALUES("sexysung","87awjkdf","성춘향","F","1992-03-31",31);
INSERT INTO user (id, pw, name, gender, birthday, age) VALUES("power70","qxur8sda","변사또","M","1970-05-02",53);
INSERT INTO user (id, pw, name, gender, birthday, age) VALUES("hanjo","j3f3ah","한조","M","1984-10-18",39);
INSERT INTO user (id, pw, name, gender, birthday, age) VALUES("widowmaker","3ewifh3","위도우","M","1976-06-27",47);
INSERT INTO user (id, pw, name, gender, birthday, age) VALUES("dvadva","k3f3ah","송하나","F","2001-06-03",22);
INSERT INTO user (id, pw, name, gender, birthday, age) VALUES("jungkrat","4ifha7f","정크랫","M","1999-11-11",24);

SELECT * FROM user;

-- DROP TABLE user

#### 실습5 SELECT 문 ####

SELECT * FROM user ORDER BY birthday ASC;
SELECT * FROM user WHERE gender="M" ORDER BY name DESC;
SELECT id, name FROM user WHERE birthday LIKE "199%";
SELECT * FROM user WHERE birthday LIKE "______6%" ORDER BY birthday ASC;
SELECT * FROM user WHERE gender="M" AND birthday LIKE "197%";
SELECT * FROM user ORDER BY age DESC LIMIT 3;
SELECT * FROM user WHERE age>=25 and age <=50;
UPDATE user SET pw = "12345678" WHERE id="hong1234";
DELETE FROM user WHERE id="jungkrat"

SELECT * FROM user;
