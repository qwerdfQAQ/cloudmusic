import {BaseUrl} from './config.js'
export function topList(){
	let listIds=['19723756','3779629','2884035','3778678'];
	return new Promise(function(reslove,reject){
		uni.request({
			url: "http://music.eleuu.com/toplist/detail",
			method: 'GET',
			data: {},
			success: res => {
				let result = res.data.list;
				result.length=4;
				for(var i=0;i<listIds.length;i++){
					result[i].listId=listIds[i];
				}
				reslove(result); 
			},
			fail: () => {},
			complete: () => {}
		});
	})
}
export function MusicList(listId){
	return uni.request({
		url:"http://music.eleuu.com/playlist/detail?id="+listId,
		method: 'GET'
	});
}

export function songDetail(songId){
	return uni.request({
		url:"http://music.eleuu.com/song/detail?ids="+songId,
		method: 'GET'
	});
}

export function songSimi(songId){
	return uni.request({
		url:"http://music.eleuu.com/simi/song?id="+songId,
		method: 'GET'
	});
}

export function songComment(songId){
	return uni.request({
		url:"http://music.eleuu.com/comment/music?id="+songId,
		method: 'GET'
	});
}

export function songLyric(songId){
	return uni.request({
		url:"http://music.eleuu.com/lyric?id="+songId,
		method: 'GET'
	});
}


export function songUrl(songId){
	return uni.request({
		url:"http://music.eleuu.com/song/url?id="+songId,
		method: 'GET'
	});
}