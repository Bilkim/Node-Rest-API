ARG NODE_VERSION=20.5.0

FROM node:${NODE_VERSION}-alpine as base
WORKDIR /LoopDFS
EXPOSE 3000

FROM base as dev
COPY . .
RUN npm install
CMD npm run dev

FROM base as prod
ENV NODE_ENV production
COPY . .
RUN --mount=type=bind,source=package.json,target=package.json \
    --mount=type=bind,source=package-lock.json,target=package-lock.json \
    --mount=type=cache,target=/root/.npm \
    npm ci --omit=dev
COPY . .
CMD node index.js


FROM base as test
ENV NODE_ENV test
COPY . .
RUN npm install
RUN npm run test