export default function getFormattedDate(dateString: string): string {
    const inputDate = new Date(dateString);

     if (isNaN(inputDate.getTime())) {
       return "Invalid Date";
     }
     
    return new Intl.DateTimeFormat("en-US", { dateStyle: "long" }).format(inputDate);
}
