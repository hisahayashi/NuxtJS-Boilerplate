export default function (context) {
  // userAgentプロパティをコンテキストに追加
  context.userAgent = process.server ? context.req.headers['user-agent'] : navigator.userAgent
}
