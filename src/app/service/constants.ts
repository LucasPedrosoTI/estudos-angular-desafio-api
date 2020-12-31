import { HttpHeaders } from '@angular/common/http';

export class Constants {
  public static prodUrl: string =
    'https://gft-desafio-api-vendas.herokuapp.com/api';

  public static devUrl: string = 'http://localhost:8080/api';

  public static token: string =
    'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOlsiZGVzYWZpby1hcGkiXSwidXNlcl9uYW1lIjoiYWRtaW5AZ2Z0LmNvbSIsInNjb3BlIjpbInJlYWQiXSwiZXhwIjoxNjA5Mzg5NTg3LCJhdXRob3JpdGllcyI6WyJST0xFX0FETUlOIiwiUk9MRV9VU0VSIl0sImp0aSI6IkQ5VkQrbnJ0LzdleEpXWGtQdVNzMExPS0VWMD0iLCJjbGllbnRfaWQiOiJhZG1pbiJ9.q5C9FRhFi37eBMw9Mw9GuGTaI3GPf10HwM4Ve-7nURgVuDKMmBvJJMDdQMihSIbsJFX8yvP6mth5b5kDBMCrxULnFPwemz0OSjnXfi2nL-RxRiufuO0zlLeoCpxVAfJPq4BXcxmNl1xwr5VsHUKvS8s2m4SQP5WwRFAGMcL_6lzli_bpp6XASebQtFisDpx4h6j9h8NcCfZ8-4hF7Lp_gjwJzkHZa0hasQw8pgR-CfcthE3R-r4bMdgr-J1YMn8iJMUAFUA8ryfJoZGgoV-C8J88jh9_w3oc5jvwMsLdHN1jxodIUAu-ymm7tcZCsIWJW3TVVlsjq6LWSyb0N-n-sw';

  public static headers: HttpHeaders = new HttpHeaders({
    Authorization: 'Bearer ' + Constants.token,
  });
}
