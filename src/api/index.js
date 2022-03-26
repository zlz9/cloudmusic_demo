//对api进行统一管理
import requests from "./requests";
// /banner get 获取轮播图
export const getBanner = () => requests({ url: "/banner", method: "get" });

// /related/playlist get 歌单推荐
export const reqPlayList = () =>
  requests({ url: "/related/playlist", method: "get" });
///login/cellphone      参数：phone: 手机号码  密码：password
export const reqCellPhone = (params) =>
  requests({
    url: "login/cellphone",
    method: "post",
    params,
  });
// 推荐歌单  url:/personalized 参数limit
export const reqPersonlized = () =>
  requests({
    url: "/personalized?limit=8",
    method: "get",
  });

//新碟上架 url:/top/album   method:get  参数limit
export const reqAlbum = () =>
  requests({
    url: "/top/album",
    method: "get",
  });
//榜单内容摘要  /toplist/detail  method:get  所有榜单： /toplist
export const reqTopList = () =>
  requests({
    url: "/toplist/detail",
    method: "get",
  });
//获取所有榜单 url：/toplist method：get
export const reqTop = () =>
  requests({
    url: "/toplist",
    method: "get",
  });

//获取榜单详细信息 url:/playlist/detail method:get 参数：id
export const reqDetail = (params) =>
  requests({
    url: "/playlist/detail",
    method: "get",
    params,
  });
// 获取音乐url url:/song/url method:get 参数 id
export const reqUrl = (params) =>
  requests({
    url: "/song/url",
    method: "get",
    params,
  });
// 获取歌词  url:/lyric method get 参数id
export const reqLyric = (params) =>
  requests({
    url: "/lyric",
    method: "get",
    params,
  });
// 获取歌单分类 url:/playlist/catlist method:get 参数：tag
export const reqPlayList1 = () =>
  requests({
    url: "/playlist/catlist",
    method: "get",
  });
// 网友精选碟 url:/top/playlist method:get 参数：cat ,limmit,offset
export const reqTopLis = (params) =>
  requests({
    url: "/top/playlist",
    method: "get",
    params,
  });
// 获取歌单详情 url:/playlist/detail method:get 参数:id
export const reqPlayListDetail = (params) =>
  requests({
    url: "/playlist/detail",
    method: "get",
    params,
  });
// 获取歌曲详情  /song/detail  参数：ids  method：get
export const reqMusicDetail = (ids) =>
  requests({
    url: `/song/detail?ids=${ids}`,
    method: "get",
  });
// 电台 banner   url:/dj/banner method:get
// export const reqDjBanner = () =>
//   requests({
//     url: "/dj/banner",
//     method: "get",
//   });
// 电台个性推荐  url:/dj/personalize/recommend method:get 参数:limit
export const reqPersonalize = (params) =>
  requests({
    url: `/dj/personalize/recommend?limit=${params}`,
    method: "get",
  });
// 电台分类 url:/dj/catelist method:get
export const reqCateList = () =>
  requests({
    url: "/dj/catelist",
    method: "get",
  });
// 推荐节目 url:/program/recommend method:get
export const reqDjRecommend = () =>
  requests({
    url: "/program/recommend",
    method: "get",
  });
//电台节目榜 url: /dj/program/toplist method:get 参数：limit offset
export const ReqDjTopList = () =>
  requests({
    url: "/dj/program/toplist",
    method: "get",
  });
// 电台 - 推荐类型 url:/dj/category/recommend method:get
export const reqCategoryRecommend = () =>
  requests({
    url: "/dj/category/recommend",
    method: "get",
  });
// 电台 - 分类推荐 url:/dj/recommend/type method:get 参数type
export const reqDjType = (params) =>
  requests({
    url: `/dj/recommend/type?type=${params}`,
    method: "get",
  });
// 电台 - 类别热门电台 url:/dj/radio/hot method:get 参数:limit  offset cateId 通过/song/url传入音频
export const reqHotProgram = (cateId) =>
  requests({
    url: `/dj/radio/hot?cateId=${cateId}&limit=20&offset=2`,
    method: "get",
  });
// 电台 - 详情 url:/dj/detail 参数:rid method:get
export const reqDjDetail = (rid) =>
  requests({
    url: `/dj/detail?rid=${rid}`,
    method: "get",
  });

// 电台 - 节目详情 url:/dj/program/detail 参数:id method:get
export const reqProgramDetail = (rid) =>
  requests({
    url: `/dj/program?rid=${rid}`,
    method: "get",
  });
// 下面是歌手模块的信息
//
//热门歌手 url:/top/artists 参数:limit offset
export const reqHotArtists = () =>
  requests({
    url: `/top/artists?offset=10&limit=20`,
    method: "get",
  });
//歌手分类列表 url:/artist/list 参数:limit offset type area
export const reqArtistList = (area) =>
  requests({
    url: `/artist/list?area=${area}`,
    method: "get",
  });
//歌手热门 50 首歌曲 url:/artist/top/song 参数:id
export const reqHotSong = (id) =>
  requests({
    url: `/artist/top/song?id=${id}`,
    method: "get",
  });
// 歌手全部歌曲 url:/artist/songs method:get
export const reqAllSongs = (id) =>
  requests({
    url: `/artist/songs?id=${id}`,
    method: "get",
  });
// 获取歌手详情 url:/artist/detail method:get
export const reqAritistInfo = (id) =>
  requests({
    url: `/artist/detail?id=${id}`,
    method: "get",
  });
//获取每日推荐歌单  url:/recommend/resource method :get
export const reqRecommend = () =>
  requests({
    url: "/recommend/resource",
    method: "get",
  });
// 获取每日推荐歌曲 /recommend/songs method：get
export const reqRecommendSongs = () =>
  requests({
    url: "/recommend/songs",
    method: "get",
  });
// 全部新碟 url:/album/new 参数：limit ,offset ,area
export const reqAlbumNew = (params) =>
  requests({
    url: "/album/new",
    method: "get",
    params,
  });
//新碟上架 url:/top/album 参数：limit,offset,area,type ,year ,month
export const reqTopAlbum = (params) =>
  requests({
    url: "/top/album",
    method: "get",
    params,
  });
// 获取新碟上架列表 url:/album 参数:limit id
export const reqAlbumInfo = (id) =>
  requests({
    url: `/album?id=${id}`,
    method: "get",
  });
//搜索 url:/search method:get 参数:type,keywords
export const reqSearch = (params) =>
  requests({
    url: "/search",
    method: "get",
    params,
  });
