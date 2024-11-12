import { expect,request } from '@playwright/test';


export async function getObservations(series: string, startDate?: string, endDate?: string, format?: string) {
    const apiContext = await request.newContext();
    const sDate =  startDate ?? '';
    const eDate =  endDate ?? '';
    const frmt = format ?? '';
    const response = await apiContext.get('observations/'+series+'/'+frmt, {
        params: {
          'start_date': sDate,
          'end_date': eDate,
        }
        });
        return response;
       };

export async function getDateMinusWeeks(weeks:number) {
    const startDate = new Date();
    const daysToSubtract = weeks * 7;
    startDate.setDate(startDate.getDate() - daysToSubtract);
    const formattedDate = startDate.toLocaleDateString('en-CA');
    return formattedDate;
    
}