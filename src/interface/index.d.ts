export namespace DouMiBlog {
  export interface HottestArticlItem {
    title: string,
    archiveTime: string,
    slug: string
  }

  export interface RegisterParam {
    email: string,
    username: string,
    password: string
  }
}
