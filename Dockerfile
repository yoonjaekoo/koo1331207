# 베이스 이미지 (Node 18 버전)
FROM node:18

# 작업 디렉터리 생성
WORKDIR /app

# package.json, package-lock.json 복사
COPY package*.json ./

# 의존성 설치
RUN npm install

# 소스 코드 복사
COPY . .

# 서버 시작 명령어
CMD ["node", "server.js"]
