import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import { IconButton } from '@mui/material';
import EditIcon from "@mui/icons-material/Edit";

// function getDaysInMonth(month, year) {
//   const date = new Date(year, month, 0);
//   const monthName = date.toLocaleDateString('en-US', {
//     month: 'short',
//   });
//   const daysInMonth = date.getDate();
//   const days = [];
//   let i = 1;
//   while (days.length < daysInMonth) {
//     days.push(`${monthName} ${i}`);
//     i += 1;
//   }
//   return days;
// }

// function renderSparklineCell(params) {
//   const data = getDaysInMonth(4, 2024);
//   const { value, colDef } = params;

//   if (!value || value.length === 0) {
//     return null;
//   }

//   return (
//     <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
//       <SparkLineChart
//         data={value}
//         width={colDef.computedWidth || 100}
//         height={32}
//         plotType="bar"
//         showHighlight
//         showTooltip
//         colors={['hsl(210, 98%, 42%)']}
//         xAxis={{
//           scaleType: 'band',
//           data,
//         }}
//       />
//     </div>
//   );
// }

// function renderStatus(status) {
//   const colors = {
//     Online: 'success',
//     Offline: 'default',
//   };

//   return <Chip label={status} color={colors[status]} size="small" />;
// }

export function renderAvatar(params) {
  if (params.value == null) {
    return '';
  }

  return (
    <Avatar
      sx={{
        backgroundColor: params.value.color,
        width: '24px',
        height: '24px',
        fontSize: '0.85rem',
      }}
    >
      {params.value.name.toUpperCase().substring(0, 1)}
    </Avatar>
  );
}

export const columns = [
  { field: 'code', headerName: 'Código', flex: 0.5, minWidth: 80 },
  {
    field: 'product',
    headerName: 'Produto',
    flex: 1.5,
    minWidth: 280,
  },
  {
    field: 'pallet',
    headerName: 'Pallet',
    headerAlign: 'center',
    align: 'center',
    flex: 1,
    minWidth: 70,
    sortable: false,
    disableColumnMenu: true,
  },
  {
    field: 'ballast',
    headerName: 'Lastro',
    headerAlign: 'center',
    align: 'center',
    flex: 1,
    minWidth: 70,
    sortable: false,
    disableColumnMenu: true,
  },
  {
    field: 'boxes',
    headerName: 'Caixas',
    headerAlign: 'center',
    align: 'center',
    flex: 1,
    minWidth: 70,
    sortable: false,
    disableColumnMenu: true,
  },
  {
    field: 'units',
    headerName: 'Unidades',
    headerAlign: 'center',
    align: 'center',
    flex: 1,
    minWidth: 70,
    sortable: false,
    disableColumnMenu: true,
  },
];

export const rows = [
  {
    id: 1,
    code: 16503,
    product: "BOH 300",
    pallet: 0,
    ballast: 0,
    boxes: 0,
    units: 0
  },
  {
    id: 2,
    code: 13201,
    product: "BC 300",
    pallet: 60,
    ballast: 9,
    boxes: 14,
    units: 18
  },
  {
    id: 3,
    code: 20549,
    product: "BDM 300",
    pallet: 1,
    ballast: 2,
    boxes: 3,
    units: 6
  },
  {
    id: 4,
    code: 20217,
    product: "ORI 300",
    pallet: 0,
    ballast: 7,
    boxes: 9,
    units: 13
  },
  {
    id: 5,
    code: 13205,
    product: "SK 300",
    pallet: 6,
    ballast: 2,
    boxes: 0,
    units: 1
  },
  {
    id: 6,
    code: 2538,
    product: "AP 600",
    pallet: 3,
    ballast: 2,
    boxes: 5,
    units: 0
  },
  {
    id: 7,
    code: 3733,
    product: "BOH 600",
    pallet: 0,
    ballast: 0,
    boxes: 0,
    units: 0
  },
  {
    id: 8,
    code: 988,
    product: "BC 600",
    pallet: 25,
    ballast: 4,
    boxes: 5,
    units: 7
  },
  {
    id: 9,
    code: 20329,
    product: "BDM 600",
    pallet: 2,
    ballast: 5,
    boxes: 6,
    units: 0
  },
  {
    id: 10,
    code: 2548,
    product: "BUD 600",
    pallet: 5,
    ballast: 4,
    boxes: 4,
    units: 19
  },
  {
    id: 11,
    code: 2546,
    product: "ORI 600",
    pallet: 10,
    ballast: 1,
    boxes: 2,
    units: 13
  },
  {
    id: 12,
    code: 982,
    product: "SK 600",
    pallet: 0,
    ballast: 5,
    boxes: 2,
    units: 0
  },
  {
    id: 13,
    code: 23186,
    product: "SPATEN 600",
    pallet: 36,
    ballast: 1,
    boxes: 4,
    units: 8
  },
  {
    id: 14,
    code: 20530,
    product: "STELLA 600",
    pallet: 0,
    ballast: 0,
    boxes: 1,
    units: 7
  },
  {
    id: 15,
    code: 1743,
    product: "AP 1000",
    pallet: 2,
    ballast: 0,
    boxes: 3,
    units: 11
  },
  {
    id: 16,
    code: 10537,
    product: "BOH 990",
    pallet: 0,
    ballast: 0,
    boxes: 0,
    units: 0
  },
  {
    id: 17,
    code: 1695,
    product: "BC 1000",
    pallet: 7,
    ballast: 2,
    boxes: 9,
    units: 0
  },
  {
    id: 18,
    code: 20533,
    product: "BDM 1000",
    pallet: 0,
    ballast: 3,
    boxes: 6,
    units: 0
  },
  {
    id: 19,
    code: 13307,
    product: "BUD 1000",
    pallet: 7,
    ballast: 1,
    boxes: 1,
    units: 7
  },
  {
    id: 20,
    code: 29253,
    product: "ORI 1000",
    pallet: 1,
    ballast: 3,
    boxes: 8,
    units: 8
  },
  {
    id: 21,
    code: 1388,
    product: "SK 1000",
    pallet: 4,
    ballast: 2,
    boxes: 1,
    units: 10
  },
  {
    id: 22,
    code: 20537,
    product: "BECK'S 600 OW",
    pallet: 0,
    ballast: 0,
    boxes: 0,
    units: 0
  },
  {
    id: 23,
    code: 13194,
    product: "BC 300 OW",
    pallet: 0,
    ballast: 0,
    boxes: 318,
    units: 0
  },
  {
    id: 24,
    code: 14550,
    product: "COL APP 600",
    pallet: 0,
    ballast: 0,
    boxes: 8,
    units: 0
  },
  {
    id: 25,
    code: 19166,
    product: "COL RIB 600",
    pallet: 0,
    ballast: 0,
    boxes: 8,
    units: 0
  },
  {
    id: 26,
    code: 18772,
    product: "PAT AMB 740",
    pallet: 0,
    ballast: 0,
    boxes: 9,
    units: 0
  },
  {
    id: 27,
    code: 18750,
    product: "PAT BOH 740",
    pallet: 0,
    ballast: 0,
    boxes: 0,
    units: 0
  },
  {
    id: 28,
    code: 18752,
    product: "PAT WEI 740",
    pallet: 0,
    ballast: 0,
    boxes: 0,
    units: 0
  },
  {
    id: 29,
    code: 13196,
    product: "SK 300 OW",
    pallet: 0,
    ballast: 0,
    boxes: 223,
    units: 0
  },
  {
    id: 30,
    code: 21668,
    product: "SPATEN 600 OW",
    pallet: 8,
    ballast: 6,
    boxes: 6,
    units: 9
  },
  {
    id: 31,
    code: 20535,
    product: "STELLA 600 OW",
    pallet: 10,
    ballast: 0,
    boxes: 14,
    units: 16
  },
  {
    id: 32,
    code: 1898,
    product: "BC 269",
    pallet: 0,
    ballast: 8,
    boxes: 20,
    units: 9
  },
  {
    id: 33,
    code: 32349,
    product: "SKBE TROP 269",
    pallet: 0,
    ballast: 2,
    boxes: 8,
    units: 2
  },
  {
    id: 34,
    code: 28137,
    product: "SKBE CAIP 269",
    pallet: 0,
    ballast: 6,
    boxes: 16,
    units: 0
  },
  {
    id: 35,
    code: 21119,
    product: "SKBE GT 269",
    pallet: 0,
    ballast: 4,
    boxes: 25,
    units: 6
  },
  {
    id: 36,
    code: 13566,
    product: "SKBE SEN 269",
    pallet: 3,
    ballast: 6,
    boxes: 24,
    units: 15
  },
  {
    id: 37,
    code: 33734,
    product: "SKBE RED MIX 269",
    pallet: 0,
    ballast: 4,
    boxes: 34,
    units: 9
  },
  {
    id: 38,
    code: 9067,
    product: "AP 350",
    pallet: 0,
    ballast: 12,
    boxes: 24,
    units: 7
  },
  {
    id: 39,
    code: 20072,
    product: "BECK'S 350",
    pallet: 0,
    ballast: 0,
    boxes: 0,
    units: 0
  },
  {
    id: 40,
    code: 9069,
    product: "BC 350",
    pallet: 100,
    ballast: 13,
    boxes: 115,
    units: 8
  },
  {
    id: 41,
    code: 9072,
    product: "BOH 350",
    pallet: 2,
    ballast: 5,
    boxes: 22,
    units: 4
  },
  {
    id: 42,
    code: 12948,
    product: "BCZ 350",
    pallet: 0,
    ballast: 0,
    boxes: 28,
    units: 4
  },
  {
    id: 43,
    code: 20498,
    product: "BDM 350",
    pallet: 6,
    ballast: 7,
    boxes: 16,
    units: 9
  },
  {
    id: 44,
    code: 21020,
    product: "BUD 350",
    pallet: 22,
    ballast: 6,
    boxes: 52,
    units: 8
  },
  {
    id: 45,
    code: 22177,
    product: "BUD ZERO 350",
    pallet: 0,
    ballast: 0,
    boxes: 2,
    units: 3
  },
  {
    id: 46,
    code: 22027,
    product: "COL API 350",
    pallet: 0,
    ballast: 0,
    boxes: 0,
    units: 0
  },
  {
    id: 47,
    code: 20853,
    product: "COL RIB 350",
    pallet: 0,
    ballast: 0,
    boxes: 0,
    units: 0
  },
  {
    id: 48,
    code: 20651,
    product: "CORONA 350 C/8",
    pallet: 14,
    ballast: 7,
    boxes: 63,
    units: 5
  },
  {
    id: 49,
    code: 19668,
    product: "ORI 350",
    pallet: 3,
    ballast: 10,
    boxes: 52,
    units: 6
  },
  {
    id: 50,
    code: 4141,
    product: "PAT AMB 350",
    pallet: 0,
    ballast: 0,
    boxes: 0,
    units: 0
  },
  {
    id: 51,
    code: 4193,
    product: "PAT WEI 350",
    pallet: 0,
    ballast: 0,
    boxes: 0,
    units: 0
  },
  {
    id: 52,
    code: 9068,
    product: "SK 350",
    pallet: 10,
    ballast: 8,
    boxes: 91,
    units: 21
  },
  {
    id: 53,
    code: 21658,
    product: "SPATEN 350",
    pallet: 3,
    ballast: 8,
    boxes: 40,
    units: 1
  },
  {
    id: 54,
    code: 19729,
    product: "STELLA 350",
    pallet: 1,
    ballast: 2,
    boxes: 18,
    units: 4
  },
  {
    id: 55,
    code: 32500,
    product: "STELLA P. GOLD LT",
    pallet: 0,
    ballast: 0,
    boxes: 0,
    units: 0
  },
  {
    id: 56,
    code: 17266,
    product: "BOH 473",
    pallet: 0,
    ballast: 1,
    boxes: 18,
    units: 2
  },
  {
    id: 57,
    code: 9320,
    product: "BC 473",
    pallet: 1,
    ballast: 0,
    boxes: 18,
    units: 11
  },
  {
    id: 58,
    code: 22326,
    product: "BDM 473",
    pallet: 0,
    ballast: 0,
    boxes: 0,
    units: 0
  },
  {
    id: 59,
    code: 14135,
    product: "BUD 473",
    pallet: 0,
    ballast: 9,
    boxes: 22,
    units: 1
  },
  {
    id: 60,
    code: 9083,
    product: "SK 473",
    pallet: 0,
    ballast: 8,
    boxes: 21,
    units: 6
  },
  {
    id: 61,
    code: 17757,
    product: "BECK'S LN",
    pallet: 0,
    ballast: 0,
    boxes: 2,
    units: 0
  },
  {
    id: 62,
    code: 371,
    product: "MALZ LN 330",
    pallet: 0,
    ballast: 0,
    boxes: 2,
    units: 0
  },
  {
    id: 63,
    code: 12951,
    product: "BCZ LN",
    pallet: 0,
    ballast: 3,
    boxes: 0,
    units: 22
  },
  {
    id: 64,
    code: 17808,
    product: "BUD LN",
    pallet: 0,
    ballast: 0,
    boxes: 6,
    units: 21
  },
  {
    id: 65,
    code: 22180,
    product: "BUDZ LN",
    pallet: 0,
    ballast: 0,
    boxes: 2,
    units: 21
  },
  {
    id: 66,
    code: 18836,
    product: "CORONA LN",
    pallet: 0,
    ballast: 0,
    boxes: 7,
    units: 33
  },
  {
    id: 67,
    code: 27866,
    product: "CORONA CERO",
    pallet: 0,
    ballast: 0,
    boxes: 12,
    units: 18
  },
  {
    id: 68,
    code: 18780,
    product: "CORONITA",
    pallet: 0,
    ballast: 0,
    boxes: 3,
    units: 4
  },
  {
    id: 69,
    code: 17278,
    product: "PAT WEI LN",
    pallet: 0,
    ballast: 0,
    boxes: 0,
    units: 10
  },
  {
    id: 70,
    code: 17276,
    product: "PAT AMB LN",
    pallet: 0,
    ballast: 0,
    boxes: 0,
    units: 0
  },
  {
    id: 71,
    code: 24168,
    product: "MICHELOB LN ",
    pallet: 0,
    ballast: 0,
    boxes: 0,
    units: 0
  },
  {
    id: 72,
    code: 32361,
    product: "SKBE TROP LN",
    pallet: 0,
    ballast: 2,
    boxes: 10,
    units: 0
  },
  {
    id: 73,
    code: 23271,
    product: "SKBE SEN LN",
    pallet: 0,
    ballast: 5,
    boxes: 13,
    units: 39
  },
  {
    id: 74,
    code: 23269,
    product: "SKBE GT LN",
    pallet: 0,
    ballast: 6,
    boxes: 5,
    units: 28
  },
  {
    id: 75,
    code: 33738,
    product: "SKBE RED MIX LN",
    pallet: 0,
    ballast: 5,
    boxes: 17,
    units: 0
  },
  {
    id: 76,
    code: 21632,
    product: "SPATEN LN",
    pallet: 2,
    ballast: 4,
    boxes: 4,
    units: 15
  },
  {
    id: 77,
    code: 18807,
    product: "STELLA LN",
    pallet: 1,
    ballast: 4,
    boxes: 18,
    units: 20
  },
  {
    id: 78,
    code: 29580,
    product: "STELLA P. GOLD LN",
    pallet: 0,
    ballast: 0,
    boxes: 2,
    units: 3
  },
  {
    id: 79,
    code: 27686,
    product: "MIKES LEMONADE LN",
    pallet: 0,
    ballast: 0,
    boxes: 0,
    units: 0
  },
  {
    id: 80,
    code: 25178,
    product: "ICE LIMÃO LN ",
    pallet: 0,
    ballast: 0,
    boxes: 0,
    units: 14
  },
  {
    id: 81,
    code: 25189,
    product: "ICE KIWI LN ",
    pallet: 0,
    ballast: 0,
    boxes: 0,
    units: 21
  },
  {
    id: 82,
    code: 25176,
    product: "ICE FRUIT LN ",
    pallet: 0,
    ballast: 0,
    boxes: 0,
    units: 22
  },
  {
    id: 83,
    code: 25174,
    product: "ICE BALADA LN ",
    pallet: 0,
    ballast: 0,
    boxes: 0,
    units: 23
  },
  {
    id: 84,
    code: 828,
    product: "CHOPP BC 30L",
    pallet: 0,
    ballast: 0,
    boxes: 0,
    units: 0
  },
  {
    id: 85,
    code: 838,
    product: "CHOPP BC 50L",
    pallet: 0,
    ballast: 0,
    boxes: 33,
    units: 0
  },
  {
    id: 86,
    code: 18152,
    product: "GCA P200",
    pallet: 2,
    ballast: 5,
    boxes: 14,
    units: 16
  },
  {
    id: 87,
    code: 19321,
    product: "GCAD P200",
    pallet: 1,
    ballast: 5,
    boxes: 36,
    units: 14
  },
  {
    id: 88,
    code: 18266,
    product: "PC 200",
    pallet: 1,
    ballast: 2,
    boxes: 23,
    units: 13
  },
  {
    id: 89,
    code: 4293,
    product: "PCZ BLCK P200",
    pallet: 0,
    ballast: 3,
    boxes: 32,
    units: 10
  },
  {
    id: 90,
    code: 18267,
    product: "SLA 200",
    pallet: 1,
    ballast: 9,
    boxes: 12,
    units: 11
  },
  {
    id: 91,
    code: 18268,
    product: "SKT 200",
    pallet: 0,
    ballast: 0,
    boxes: 1,
    units: 20
  },
  {
    id: 92,
    code: 9084,
    product: "GCA LT",
    pallet: 11,
    ballast: 9,
    boxes: 84,
    units: 14
  },
  {
    id: 93,
    code: 9085,
    product: "GCAD LT",
    pallet: 5,
    ballast: 13,
    boxes: 79,
    units: 10
  },
  {
    id: 94,
    code: 9096,
    product: "PC LT",
    pallet: 0,
    ballast: 0,
    boxes: 38,
    units: 3
  },
  {
    id: 95,
    code: 9274,
    product: "PCZ BLCK LT",
    pallet: 0,
    ballast: 7,
    boxes: 47,
    units: 13
  },
  {
    id: 96,
    code: 9087,
    product: "SLA LT",
    pallet: 0,
    ballast: 7,
    boxes: 13,
    units: 11
  },
  {
    id: 97,
    code: 9089,
    product: "SKT LT",
    pallet: 2,
    ballast: 4,
    boxes: 34,
    units: 14
  },
  {
    id: 98,
    code: 9091,
    product: "TA LT",
    pallet: 1,
    ballast: 15,
    boxes: 21,
    units: 14
  },
  {
    id: 99,
    code: 9092,
    product: "TAD LT",
    pallet: 1,
    ballast: 2,
    boxes: 10,
    units: 28
  },
  {
    id: 100,
    code: 8791,
    product: "H2O LIM 500",
    pallet: 0,
    ballast: 6,
    boxes: 19,
    units: 8
  },
  {
    id: 101,
    code: 13061,
    product: "H2O LIMO 500",
    pallet: 7,
    ballast: 3,
    boxes: 14,
    units: 8
  },
  {
    id: 102,
    code: 2319,
    product: "GCA P1",
    pallet: 26,
    ballast: 11,
    boxes: 39,
    units: 9
  },
  {
    id: 103,
    code: 2585,
    product: "GCA VD 1L",
    pallet: 0,
    ballast: 0,
    boxes: 0,
    units: 0
  },
  {
    id: 104,
    code: 29845,
    product: "PCZ BLCK P1",
    pallet: 0,
    ballast: 5,
    boxes: 5,
    units: 0
  },
  {
    id: 105,
    code: 7325,
    product: "PC P1",
    pallet: 32,
    ballast: 1,
    boxes: 34,
    units: 18
  },
  {
    id: 106,
    code: 2320,
    product: "SLA P1",
    pallet: 3,
    ballast: 0,
    boxes: 8,
    units: 26
  },
  {
    id: 107,
    code: 347,
    product: "SKT P1",
    pallet: 2,
    ballast: 1,
    boxes: 26,
    units: 18
  },
  {
    id: 108,
    code: 22202,
    product: "TAD 1L",
    pallet: 0,
    ballast: 0,
    boxes: 0,
    units: 0
  },
  {
    id: 109,
    code: 22200,
    product: "TA 1L",
    pallet: 0,
    ballast: 0,
    boxes: 1,
    units: 0
  },
  {
    id: 110,
    code: 8411,
    product: "GCA P1,5",
    pallet: 0,
    ballast: 0,
    boxes: 2,
    units: 10
  },
  {
    id: 111,
    code: 8793,
    product: "H2O LIM 1,5L",
    pallet: 0,
    ballast: 0,
    boxes: 2,
    units: 5
  },
  {
    id: 112,
    code: 13065,
    product: "H2O LIMO 1,5L",
    pallet: 1,
    ballast: 0,
    boxes: 2,
    units: 0
  },
  {
    id: 113,
    code: 2349,
    product: "GCA P2",
    pallet: 13,
    ballast: 1,
    boxes: 19,
    units: 11
  },
  {
    id: 114,
    code: 2353,
    product: "GCAD P2",
    pallet: 6,
    ballast: 1,
    boxes: 14,
    units: 5
  },
  {
    id: 115,
    code: 9276,
    product: "PCZ BLCK P2",
    pallet: 2,
    ballast: 1,
    boxes: 9,
    units: 10
  },
  {
    id: 116,
    code: 504,
    product: "PC P2",
    pallet: 0,
    ballast: 1,
    boxes: 32,
    units: 9
  },
  {
    id: 117,
    code: 4409,
    product: "PCTW P2",
    pallet: 0,
    ballast: 0,
    boxes: 3,
    units: 3
  },
  {
    id: 118,
    code: 2350,
    product: "SLA P2",
    pallet: 6,
    ballast: 0,
    boxes: 20,
    units: 5
  },
  {
    id: 119,
    code: 503,
    product: "SUKT P2",
    pallet: 13,
    ballast: 2,
    boxes: 11,
    units: 11
  },
  {
    id: 120,
    code: 21441,
    product: "SKT LIMÃO P2",
    pallet: 0,
    ballast: 0,
    boxes: 8,
    units: 3
  },
  {
    id: 121,
    code: 1166,
    product: "SKT UVA P2",
    pallet: 0,
    ballast: 0,
    boxes: 1,
    units: 4
  },
  {
    id: 122,
    code: 7947,
    product: "GCA P2,5",
    pallet: 2,
    ballast: 1,
    boxes: 2,
    units: 1
  },
  {
    id: 123,
    code: 7945,
    product: "PC P2,5",
    pallet: 0,
    ballast: 0,
    boxes: 7,
    units: 0
  },
  {
    id: 124,
    code: 7979,
    product: "GAT FRUTCIT",
    pallet: 0,
    ballast: 0,
    boxes: 0,
    units: 0
  },
  {
    id: 125,
    code: 7981,
    product: "GAT LAR",
    pallet: 0,
    ballast: 1,
    boxes: 13,
    units: 4
  },
  {
    id: 126,
    code: 7982,
    product: "GAT LIM",
    pallet: 0,
    ballast: 5,
    boxes: 39,
    units: 7
  },
  {
    id: 127,
    code: 7985,
    product: "GAT MAR",
    pallet: 1,
    ballast: 4,
    boxes: 5,
    units: 3
  },
  {
    id: 128,
    code: 7983,
    product: "GAT MO&MA",
    pallet: 0,
    ballast: 2,
    boxes: 20,
    units: 0
  },
  {
    id: 129,
    code: 7980,
    product: "GAT TAN",
    pallet: 0,
    ballast: 0,
    boxes: 2,
    units: 7
  },
  {
    id: 130,
    code: 7977,
    product: "GAT UVA",
    pallet: 0,
    ballast: 4,
    boxes: 12,
    units: 3
  },
  {
    id: 131,
    code: 32067,
    product: "GAT BERRYBLUE",
    pallet: 0,
    ballast: 0,
    boxes: 2,
    units: 5
  },
  {
    id: 132,
    code: 13486,
    product: "FUSION P1",
    pallet: 0,
    ballast: 0,
    boxes: 0,
    units: 0
  },
  {
    id: 133,
    code: 25700,
    product: "FUSION P2",
    pallet: 0,
    ballast: 1,
    boxes: 9,
    units: 4
  },
  {
    id: 134,
    code: 31272,
    product: "FUSION 473",
    pallet: 0,
    ballast: 4,
    boxes: 2,
    units: 0
  },
  {
    id: 135,
    code: 32427,
    product: "FUSION TROP 473",
    pallet: 0,
    ballast: 0,
    boxes: 0,
    units: 0
  },
  {
    id: 136,
    code: 32425,
    product: "FUSION MEL 473",
    pallet: 0,
    ballast: 0,
    boxes: 0,
    units: 10
  },
  {
    id: 137,
    code: 19229,
    product: "RED BULL C/6",
    pallet: 4,
    ballast: 2,
    boxes: 28,
    units: 2
  },
  {
    id: 138,
    code: 19225,
    product: "RED BULL LT C/24",
    pallet: 0,
    ballast: 0,
    boxes: 2,
    units: 28
  },
  {
    id: 139,
    code: 30045,
    product: "RED BULL 473 ML",
    pallet: 0,
    ballast: 0,
    boxes: 3,
    units: 15
  },
  {
    id: 140,
    code: 24306,
    product: "RED BULL MELA",
    pallet: 0,
    ballast: 1,
    boxes: 18,
    units: 0
  },
  {
    id: 141,
    code: 19231,
    product: "RED BULL SF C/4",
    pallet: 0,
    ballast: 0,
    boxes: 3,
    units: 3
  },
  {
    id: 142,
    code: 21666,
    product: "RED BULL TROP",
    pallet: 1,
    ballast: 2,
    boxes: 38,
    units: 3
  },
  {
    id: 143,
    code: 26607,
    product: "RED BULL PITA",
    pallet: 0,
    ballast: 1,
    boxes: 49,
    units: 0
  },
  {
    id: 144,
    code: 21529,
    product: "ABSOLUT 1L",
    pallet: 0,
    ballast: 0,
    boxes: 6,
    units: 1
  },
  {
    id: 145,
    code: 21788,
    product: "BALLANTINES 1L",
    pallet: 0,
    ballast: 0,
    boxes: 1,
    units: 5
  },
  {
    id: 146,
    code: 21886,
    product: "BEEFEATER 750ML",
    pallet: 0,
    ballast: 0,
    boxes: 0,
    units: 0
  },
  {
    id: 147,
    code: 27825,
    product: "DOMUS 1L",
    pallet: 6,
    ballast: 4,
    boxes: 28,
    units: 3
  },
  {
    id: 148,
    code: 22562,
    product: "DOMEC 1L",
    pallet: 0,
    ballast: 0,
    boxes: 0,
    units: 0
  },
  {
    id: 149,
    code: 21955,
    product: "CHIVAS REGAL 1L",
    pallet: 0,
    ballast: 0,
    boxes: 0,
    units: 10
  },
  {
    id: 150,
    code: 21527,
    product: "TANQUERAY LONDON 1L",
    pallet: 0,
    ballast: 0,
    boxes: 0,
    units: 0
  },
  {
    id: 151,
    code: 29474,
    product: "YVY GIN LT 710ML ",
    pallet: 0,
    ballast: 11,
    boxes: 30,
    units: 2
  },
  {
    id: 152,
    code: 29462,
    product: "YVY GIN GFA 750ML",
    pallet: 0,
    ballast: 1,
    boxes: 11,
    units: 1
  },
  {
    id: 153,
    code: 21792,
    product: "WHITE HORSE 1L",
    pallet: 0,
    ballast: 0,
    boxes: 1,
    units: 11
  },
  {
    id: 154,
    code: 33107,
    product: "POLAK 1L",
    pallet: 0,
    ballast: 3,
    boxes: 28,
    units: 5
  },
  {
    id: 155,
    code: 25151,
    product: "OLD PAR 1L",
    pallet: 0,
    ballast: 0,
    boxes: 3,
    units: 0
  },
  {
    id: 156,
    code: 21789,
    product: "ORLOFF 1L",
    pallet: 0,
    ballast: 0,
    boxes: 6,
    units: 10
  },
  {
    id: 157,
    code: 22382,
    product: "PASSPORT 1L",
    pallet: 0,
    ballast: 0,
    boxes: 1,
    units: 3
  },
  {
    id: 158,
    code: 25220,
    product: "OURO 51 1L",
    pallet: 0,
    ballast: 2,
    boxes: 5,
    units: 7
  },
  {
    id: 159,
    code: 21791,
    product: "51 1L",
    pallet: 8,
    ballast: 0,
    boxes: 3,
    units: 3
  },
  {
    id: 160,
    code: 23443,
    product: "PITU 1L",
    pallet: 0,
    ballast: 2,
    boxes: 0,
    units: 8
  },
  {
    id: 161,
    code: 24410,
    product: "QDMOR BRAN",
    pallet: 0,
    ballast: 0,
    boxes: 0,
    units: 0
  },
  {
    id: 162,
    code: 24411,
    product: "QDMOR BRAN SEC",
    pallet: 0,
    ballast: 0,
    boxes: 0,
    units: 0
  },
  {
    id: 163,
    code: 24408,
    product: "QDMOR SECO",
    pallet: 0,
    ballast: 0,
    boxes: 0,
    units: 0
  },
  {
    id: 164,
    code: 24409,
    product: "QDMOR TINTO",
    pallet: 0,
    ballast: 0,
    boxes: 2,
    units: 4
  },
  {
    id: 165,
    code: 21526,
    product: "RED LABEL 1L",
    pallet: 0,
    ballast: 0,
    boxes: 1,
    units: 7
  },
  {
    id: 166,
    code: 23029,
    product: "RED LABEL BLACK 1L",
    pallet: 0,
    ballast: 0,
    boxes: 0,
    units: 10
  },
  {
    id: 167,
    code: 21530,
    product: "SMIRNOFF 1L",
    pallet: 0,
    ballast: 0,
    boxes: 1,
    units: 10
  },
  {
    id: 168,
    code: 22009,
    product: "CHICLETE HORT",
    pallet: 0,
    ballast: 0,
    boxes: 0,
    units: 0
  },
  {
    id: 169,
    code: 22003,
    product: "HALLS CEREJA",
    pallet: 0,
    ballast: 0,
    boxes: 16,
    units: 0
  },
  {
    id: 170,
    code: 22007,
    product: "HALLS FORTE",
    pallet: 0,
    ballast: 3,
    boxes: 3,
    units: 0
  },
  {
    id: 171,
    code: 22005,
    product: "HALLS MENTA",
    pallet: 0,
    ballast: 0,
    boxes: 29,
    units: 0
  },
  {
    id: 172,
    code: 27177,
    product: "HALLS MENTOL",
    pallet: 0,
    ballast: 2,
    boxes: 22,
    units: 0
  },
  {
    id: 173,
    code: 27179,
    product: "HALLS MORANGO",
    pallet: 0,
    ballast: 0,
    boxes: 27,
    units: 0
  },
  {
    id: 174,
    code: 21968,
    product: "TRINDENT HORT",
    pallet: 0,
    ballast: 0,
    boxes: 2,
    units: 0
  },
  {
    id: 175,
    code: 21973,
    product: "TRINDENT MELAN",
    pallet: 0,
    ballast: 2,
    boxes: 10,
    units: 0
  },
  {
    id: 176,
    code: 21970,
    product: "TRINDENT MENTA",
    pallet: 0,
    ballast: 0,
    boxes: 3,
    units: 0
  },
  {
    id: 177,
    code: 21974,
    product: "TRINDENT TUTI",
    pallet: 0,
    ballast: 1,
    boxes: 25,
    units: 0
  },
  {
    id: 178,
    product: "ÁGUA PORTO S/G 200ML",
    pallet: 3,
    ballast: 0,
    boxes: 0,
    units: 0
  },
  {
    id: 179,
    code: 12455,
    product: "ÁGUA PORTO S/G 510Ml",
    pallet: 22,
    ballast: 6,
    boxes: 64,
    units: 14
  },
  {
    id: 180,
    code: 12457,
    product: "ÁGUA PORTO C/G 510Ml",
    pallet: 14,
    ballast: 5,
    boxes: 52,
    units: 10
  },
  {
    id: 181,
    code: 12459,
    product: "ÁGUA PORTOS/G 1,5L",
    pallet: 12,
    ballast: 2,
    boxes: 49,
    units: 8
  },
  {
    id: 182,
    code: 12460,
    product: "ÁGUA PORTOS/G 5L",
    pallet: 7,
    ballast: 2,
    boxes: 20,
    units: 2
  },
  {
    id: 183,
    code: 29201,
    product: "TANG ABACAXI",
    pallet: 0,
    ballast: 0,
    boxes: 33,
    units: 0
  },
  {
    id: 184,
    code: 29199,
    product: "TANG LARANJA",
    pallet: 0,
    ballast: 0,
    boxes: 29,
    units: 0
  },
  {
    id: 185,
    code: 29197,
    product: "TANG LIMAO",
    pallet: 0,
    ballast: 0,
    boxes: 82,
    units: 0
  },
  {
    id: 186,
    code: 29215,
    product: "TANG UVA",
    pallet: 0,
    ballast: 0,
    boxes: 16,
    units: 0
  },
  {
    id: 187,
    code: 29207,
    product: "TANG MORANGO",
    pallet: 0,
    ballast: 0,
    boxes: 3,
    units: 0
  },
  {
    id: 188,
    code: 29209,
    product: "TANG MARACUJA",
    pallet: 0,
    ballast: 0,
    boxes: 12,
    units: 0
  },
  {
    id: 189,
    code: 22106,
    product: "MINE OREO",
    pallet: 0,
    ballast: 0,
    boxes: 0,
    units: 0
  },
  {
    id: 190,
    code: 23246,
    product: "LEITE CONDENSADO",
    pallet: 0,
    ballast: 0,
    boxes: 0,
    units: 0
  },
  {
    id: 191,
    code: 23256,
    product: "CREME DE LEITE 200G",
    pallet: 0,
    ballast: 0,
    boxes: 0,
    units: 0
  },
  {
    id: 192,
    code: 23594,
    product: "PIRAKIDS B. LACTEA",
    pallet: 0,
    ballast: 0,
    boxes: 0,
    units: 0
  }
];