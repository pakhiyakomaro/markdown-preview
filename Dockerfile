FROM python:alpine
RUN mkdir /app
RUN apk add --no-cache git npm
RUN git clone https://github.com/ayushk780/markdown-preview /app
WORKDIR /app
RUN pip install -r ./requirements.txt
RUN npm install
RUN npm i -g serve
RUN npm run build
RUN echo"python ./src/script/rst2html.py & \n serve -s build -l 8080" > start.sh
RUN chmod +x start.sh
CMD ['sh', 'start.sh']
