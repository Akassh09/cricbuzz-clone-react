import {api} from './base'

export async function get_series = ()=> {
    const series = await api.get("/series");
    return series.data.results;
}