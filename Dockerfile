FROM python:alpine
RUN mkdir /app
RUN apk add --no-cache git npm
RUN git clone https://github.com/ayushk780/markdown-preview /app
RUN pip install --no-cache flask flask_cors docutils
WORKDIR /app
RUN npm install
RUN npm i -g serve
RUN npm run build
RUN echo"python ./src/script/rst2html.py & \n serve -s build -l 4200" > start.sh
RUN chmod +x start.sh
CMD ['sh', 'start.sh']
