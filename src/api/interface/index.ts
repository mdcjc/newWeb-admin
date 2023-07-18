export interface Result {
	code: number;
	msg: string;
}

// * 请求响应参数(包含data)
export interface ResultData<T = any> extends Result {
	token?: string;
	data: T;
}
