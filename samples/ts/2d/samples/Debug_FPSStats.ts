module laya {
	import Browser = laya.utils.Browser;
	import Stat = laya.utils.Stat;

	export class Debug_FPSStats {
		constructor() {
			Laya.init(Browser.clientWidth, Browser.clientHeight);
			Stat.show(Browser.clientWidth - 120 >> 1, Browser.clientHeight - 100 >> 1);
		}
	}
}
new laya.Debug_FPSStats();