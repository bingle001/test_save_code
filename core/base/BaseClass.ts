/**
 * 基类
 */
class BaseClass extends egret.HashObject {

	public constructor() {
		super();
	}

	/**
	 * 获取一个单例
	 */
	public static ins(...args:any[]):any{
		let Class:any = this;
		if(!Class._instance){
			Class._instance = new Class(...args);
		}
		return Class._instance;
	}

}