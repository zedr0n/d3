import type { App } from "obsidian";
import * as d3 from 'd3';

export class Api {
	public static GetApi(
		app: App) {
            return {
                d3: (
                ) => {
                    return d3;
                },
            }
    }
}