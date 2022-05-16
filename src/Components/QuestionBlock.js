import React from "react";
import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import { TextField } from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import FormGroup from "@mui/material/FormGroup";
import Checkbox from "@mui/material/Checkbox";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import LinearProgress, {
  LinearProgressProps,
} from "@mui/material/LinearProgress";
import Typography from "@mui/material/Typography";
import Favorite from "@mui/icons-material/Favorite";
import { ContextAppValues } from "../Utilities/ContextBlock";
const res = {
  status: "ok",
  message: "",
  data: [
    {
      question_count: 0,
      correct_count: 0,
      wrong_count: 0,
      blank_count: 0,
      total_point: 0,
      total_time: 0,
      status: 1,
      cid: "eyJpdiI6Ikw0U2dIc1hNamxKWjNTQkJ6NFBkUXc9PSIsInZhbHVlIjoieVluQTRTVzF5VVVnYWRiQWtLVVNIQT09IiwibWFjIjoiZTQwMzc0ZDY1MDcyMzU5ZjY5MTU3OTIxYzM1NmZiMTBkODMzMGI3MWRlM2ZhMzEyOWJjZTAxODQxN2VhZGQ4OCIsInRhZyI6IiJ9",
      exam: {
        name: "Sınav 1",
        description: "sınav 1 açıklama",
        time: 1000,
        rating_type: 1,
        status: 1,
        cid: "eyJpdiI6IjdZcExPZEw0RUZpblVMZDR2OCtVSkE9PSIsInZhbHVlIjoiZ0lIZWpDdEpERHNENmZySjlwUjd5Zz09IiwibWFjIjoiZDI4OGYwMmRmYWY2OWJhYmRkNzk0YmU1ZDZmZjE5Y2JmNzBjOWM5YjU2YmViZmM5NjkwNWIzMjA2MGJlY2Q1MCIsInRhZyI6IiJ9",
      },
      questions: [
        {
          id: 1,
          type: 1,
          point: 25,
          orderby: 1,
          question: "Soru 1",
          description: "Soru açıklama",
          required: 2,
          status: 1,
          cid: "eyJpdiI6IlNEQ1VCd3J1dkZndFFHVEJMNHdnb1E9PSIsInZhbHVlIjoiVVpNajBFaS9vZ1BDUjZqSHdxOU8wUT09IiwibWFjIjoiMDEyNmRmOWJhMzJmZDE5Y2VhZGQ5OWVkYjU1MzcyYzVlZGIyNzI3OGY4MThkYTkwZWM4ZGIxMzNkMDhkZDM3ZiIsInRhZyI6IiJ9",
          options: [
            {
              id: 1,
              orderby: 1,
              option: "Cevap 1.1",
              correct_status: 1,
              status: 1,
              cid: "eyJpdiI6ImhlQnR4RE16SFlZMmIyWmlCRzF2WkE9PSIsInZhbHVlIjoicU40dXQveGttaXZCRzBJUXdRL0VGQT09IiwibWFjIjoiZTZlMTM2MGJlNjQ1YzFkNDcwZWI3ZTI3YTdlMzkwOTFiMDllNGUyOWQyMjAyYTA2YTE4OTRkZTk0YTFjYzFmNiIsInRhZyI6IiJ9",
            },
            {
              id: 2,
              orderby: 2,
              option: "Cevap 1.2",
              correct_status: 2,
              status: 1,
              cid: "eyJpdiI6InFBeGF1aDRQU2dhcUtxajNlZDRWZUE9PSIsInZhbHVlIjoiWStyd293OVkrVFdtNVI2VndZS01CUT09IiwibWFjIjoiYmRlMzk1YTBhOTNmMmM0Yjk2MDk1NmM1MzJiNjc1MjFhMmYxZmMyZTAwNTgyMmFjNDU5MDgzODkzMTA3ZDE4NSIsInRhZyI6IiJ9",
            },
            {
              id: 3,
              orderby: 3,
              option: "Cevap 1.3",
              correct_status: 2,
              status: 1,
              cid: "eyJpdiI6IlprdUZkK0VPVHRjWGx2MUJ4NVVJdmc9PSIsInZhbHVlIjoidFNQcVhrSUw1WGlyNlg2dGFwYTI2QT09IiwibWFjIjoiZmFmYmVjMjE1NDVmNjliOWJhMGYxZmM1OGM0NjE0YTRmNGY0NzBkMDE2NzliM2MyNjM1ZTFjMDc3MzkzNWY0ZCIsInRhZyI6IiJ9",
            },
            {
              id: 4,
              orderby: 4,
              option: "Cevap 1.4",
              correct_status: 2,
              status: 1,
              cid: "eyJpdiI6IlZubXp3NGRqM0MwOGJzcWZaRWxNVGc9PSIsInZhbHVlIjoieGN3TGdJcHhoRk1oVDNyMnd4MndhZz09IiwibWFjIjoiNTdjNTI1ZTBjN2E2Y2FlODMwODZjOTJiNmM2NDk4MWFkNzk2YTNjMzFmMWJlMGFlMzY3M2UzNjYzYmE3MjNjNCIsInRhZyI6IiJ9",
            },
          ],
        },
        {
          id: 2,
          type: 2,
          point: 25,
          orderby: 2,
          question: "Soru 2",
          description: "",
          required: 2,
          status: 1,
          cid: "eyJpdiI6Im4rcUZWM1V2VDhlYWVHbk1FMlh2L0E9PSIsInZhbHVlIjoiZWFQSWdsVWl3M2FzQW4xQytnNGdKUT09IiwibWFjIjoiMzAwY2VkNWM0OWQxMTJmMjc5NTgwNzY5Njk0ZGIxZmNjZTA3MWIwNmY1Mzc0ZmQ1YjE4Mjk2YWNkYjRjZWM5MyIsInRhZyI6IiJ9",
          options: [
            {
              id: 5,
              orderby: 1,
              option: "Cevap 2.1",
              correct_status: 2,
              status: 1,
              cid: "eyJpdiI6ImNPVG5DTDY3TFFwMXkrcDJpMklrYlE9PSIsInZhbHVlIjoiY0hveHR2RDFaSmNxSjJTVFhYZEdnZz09IiwibWFjIjoiMWQ1NWEwYWNhMjRjMjcxMzMzM2NmNTM5MWQyOTJhMTA3NGEzYmFlZDQwZjJmNWQ0NDQyOTEzZjU5OGE2NmE3NyIsInRhZyI6IiJ9",
            },
            {
              id: 6,
              orderby: 2,
              option: "Cevap 2.2",
              correct_status: 1,
              status: 1,
              cid: "eyJpdiI6Ijc1cmFxanBVdmVLZjZ5M1VOMGlKZXc9PSIsInZhbHVlIjoibUpBQVVseXdoTnVtdzVUR29CTmkrZz09IiwibWFjIjoiMzQwMjkxMzZlYzU1YmM3Njg3Y2I2YjZhZWY3M2MzMDg3YTM3YWQzMDg3ZjBmYTFiMzVjZDJhMjc0YzgzNDc2YiIsInRhZyI6IiJ9",
            },
            {
              id: 7,
              orderby: 3,
              option: "Cevap 2.3",
              correct_status: 2,
              status: 1,
              cid: "eyJpdiI6InA3dkNlYmY2TzVIYkFCQmF0dzVOWnc9PSIsInZhbHVlIjoia2VaNmVUdG5MTHNNSUx6eFBhWVpoZz09IiwibWFjIjoiOGJjNjc4ZWY2NjQ0MjhhYTk0YjM1NDE2NjczZjZlODU4NWIwYWNkNTBkNzI2OTJkYTQ3OWUwOWNiYzdjMDQ2MiIsInRhZyI6IiJ9",
            },
            {
              id: 8,
              orderby: 4,
              option: "Cevap 2.4",
              correct_status: 2,
              status: 1,
              cid: "eyJpdiI6IkRWclpINEdPOS9ZUytoVW4zeVJWRnc9PSIsInZhbHVlIjoiN3BIRENiNThtUmR2WVdPNXhBZHN4dz09IiwibWFjIjoiMjI2ZmI5YTA2MTAzMWU4NGRhZGUyMDA4MDZmMTczNWVmYzA1NmI4YjY1MzIzOTdjOTAxMjE1YzY2MjMwNTE5MCIsInRhZyI6IiJ9",
            },
          ],
        },
        {
          id: 3,
          type: 1,
          point: 25,
          orderby: 3,
          question: "Soru 3",
          description: "",
          required: 2,
          status: 1,
          cid: "eyJpdiI6Ijd3dmlOYWNPd05qZWx4N0NIelo3SXc9PSIsInZhbHVlIjoibng2cWRxUUF3M21uQ3U1Q0JaVDJRZz09IiwibWFjIjoiNDdhM2ZkOGVjY2ZiMzdiYmU5ODk4NTM3MTU2ODc4MzBiNDMwN2YwY2JlODk2ZWU5NzY0ZTJhY2Q2ODhiODExMSIsInRhZyI6IiJ9",
          options: [
            {
              id: 9,
              orderby: 1,
              option: "Cevap 3.1",
              correct_status: 2,
              status: 1,
              cid: "eyJpdiI6Im1vVmgzTFVIbnB5Myswa0hHK2JzN2c9PSIsInZhbHVlIjoiUHFkV0lMMWlPa3E3RWhPTFJLMm45UT09IiwibWFjIjoiZjJjY2I0ODhkODUwOGMwYmJkNDZhNDIzMDUxZmNiNDJlMTU4MDA2ZmNmZmEyNmE3OWIyNTMwODFkMDEzZmQ2NyIsInRhZyI6IiJ9",
            },
            {
              id: 10,
              orderby: 2,
              option: "Cevap 3.2",
              correct_status: 2,
              status: 1,
              cid: "eyJpdiI6IkF4MFo5bTlmcGdXeGw2QkpqSEs5UVE9PSIsInZhbHVlIjoiODdhTnlwUEhpZnkzUjk5RGw0WFZ6QT09IiwibWFjIjoiOGZkZTE0OTU3NDM4NDlmNWZiOTI4YTQ0ZDAwMGY4YWY3MTU4Y2QwNzk4NjM4MDdkYzkwZTQwMmQyMTcwZDdiNyIsInRhZyI6IiJ9",
            },
            {
              id: 11,
              orderby: 3,
              option: "Cevap 3.3",
              correct_status: 1,
              status: 1,
              cid: "eyJpdiI6IkdTOXVEbVBlQjFoWlJ2akREbjhCYkE9PSIsInZhbHVlIjoibkhTYVROd3R6SWxQRnlqcGl2ZDBYdz09IiwibWFjIjoiZjQ5YWEyNmRhNmY5MTM4Yzc5MjdlNThhYTQ3OWU5MTI0ZGE0ZDkyZDNjM2ZiYjk2M2MxNjdhYWI0YWIzYzJhZSIsInRhZyI6IiJ9",
            },
            {
              id: 12,
              orderby: 4,
              option: "Cevap 3.4",
              correct_status: 2,
              status: 1,
              cid: "eyJpdiI6Ik9FRFF5L29KWWhVOC83di9WYVcycVE9PSIsInZhbHVlIjoiVEtqcGoyd2IrRVpra01IQUE0ejEwdz09IiwibWFjIjoiMWRjNTk0Y2U0YjdiYjQ2Zjg3YmIxYTYwODQ0YTYwZDU4YjJlYTRmNzhiMDQyOGNiNmY0OGMyYTIzNWYwNWE2MCIsInRhZyI6IiJ9",
            },
          ],
        },
        {
          id: 4,
          type: 3,
          point: 25,
          orderby: 4,
          question: "Soru 4",
          description: "Açıklama",
          required: 1,
          status: 1,
          cid: "eyJpdiI6IkJGMDVYQVFVZlBOOWhERkllWUUyUVE9PSIsInZhbHVlIjoiWWt3U09XS2ZqWWc5WUtNcHBUUHlBQT09IiwibWFjIjoiNDc0ZWVmOWIwYTIwZWNkOWFhYjFmNmJlMGI5YTM0NzM3ZWFiYmJhN2NmZmIwN2ViY2IwY2ZjNTI1MzhhMTBiYyIsInRhZyI6IiJ9",
          options: [],
        },
      ],
    },
  ],
  http_code: 200,
};
const HEADER_INFO_TEXT =
  "Lütfen sağlıklı bir değerlendirme için bilmediğiniz soruları boş bırakınız";
function LinearProgressWithLabel(props, value) {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Box sx={{ width: "100%", mr: 1 }}>
        <LinearProgress variant='determinate' {...props} />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant='body2' color='text.secondary'>{`${Math.round(
          props.value
        )}%`}</Typography>
      </Box>
    </Box>
  );
}

function QuestionBlock(pros) {
  const context = React.useContext(ContextAppValues);
  const [page, setPage] = React.useState(1);
  const pageData = res.data[0].questions.find(
    (questionData) => questionData.orderby === page
  );
  const [response, setResponse] = React.useState(() => {
    var returnVal = [];
    switch (pageData.type) {
      /* Single Value Selectable List*/
      case 1:
        console.log("I am here");
        pageData.options.map((option) =>
          returnVal.push({ id: option.id, value: false })
        );
        break;
      /* Multiple Value Selectable List*/

      case 2:
        console.log("I am here1");

        pageData.options.map((option) =>
          returnVal.push({ id: option.id, value: false })
        );
        break;
      /*Text */
      case 3:
        returnVal = "";
        break;
      default:
        break;
    }
    return returnVal;
  });
  const TOTAL_NR_OF_PAGES = context.response.data.data.questions.length;

  React.useEffect(() => {
    setResponse(() => {
      var returnVal = [];
      switch (pageData.type) {
        /* Single Value Selectable List*/
        case 1:
          pageData.options.map((option) =>
            returnVal.push({ id: option.id, value: false })
          );
          break;
        /* Multiple Value Selectable List*/

        case 2:
          pageData.options.map((option) =>
            returnVal.push({ id: option.id, value: false })
          );
          break;
        /*Text */
        case 3:
          returnVal = "";
          break;
        default:
          break;
      }
      return returnVal;
    });
  }, [page, pageData.options, pageData.type]);

  function handleMultipleTextChange(e, index) {
    console.log(index);
    var newArray = [...response];
    newArray.find((key) => key.id === index).value = !newArray.find(
      (key) => key.id === index
    ).value;
    return newArray;
  }
  return (
    <div>
      <div>
        <h4>{pageData.question}</h4>
        <h4>{pageData.description}</h4>
      </div>
      <div>
        {pageData.type === 3 ? (
          /* Text field */

          <Box
            sx={{
              width: 500,
              maxWidth: "100%",
            }}
          >
            <TextField fullWidth label='fullWidth' id='fullWidth' />
          </Box>
        ) : pageData.type === 1 ? (
          /* Single value selectable list */

          <FormControl>
            <FormLabel id='demo-radio-buttons-group-label'></FormLabel>
            <RadioGroup
              aria-labelledby='demo-radio-buttons-group-label'
              name='radio-buttons-group'
            >
              {pageData.options.map((questionOption) => (
                <FormControlLabel
                  value={questionOption.option}
                  control={<Radio />}
                  label={questionOption.option}
                />
              ))}
            </RadioGroup>
          </FormControl>
        ) : (
          /* Multiple values selectable list */
          <FormGroup>
            {pageData.options.map((questionOption) => (
              <FormControlLabel
                control={
                  <Checkbox
                    icon={<RadioButtonUncheckedIcon />}
                    checkedIcon={<RadioButtonCheckedIcon />}
                    checked={
                      response.find((key) => key.id === questionOption.id)
                        ?.value
                    }
                    onClick={(e) =>
                      setResponse((prevData) =>
                        handleMultipleTextChange(e, questionOption.id)
                      )
                    }
                  />
                }
                label={questionOption.option}
              />
            ))}
          </FormGroup>
        )}
      </div>
      <div>
        <Button
          onClick={() => {
            if (
              JSON.parse(context.response).data.data.questions.find(
                (key) => key.id === page - 1
              ) !== undefined
            ) {
              setPage((prevNum) => prevNum - 1);
            }
          }}
          variant='contained'
        >
          Önceki
        </Button>
        <Button
          onClick={() => {
            if (
              context.response.data.data.questions.find(
                (key) => key.id === page + 1
              ) !== undefined
            ) {
              setPage((prevNum) => prevNum + 1);
            }
          }}
          variant='contained'
        >
          Sonraki
        </Button>
        <h4>{"İlerleme(" + `${page}` + "/" + `${TOTAL_NR_OF_PAGES}` + ")"}</h4>
        <Box sx={{ width: "100%", paddingTop: 1 }}>
          <LinearProgress
            variant='determinate'
            value={((page - 1) / (TOTAL_NR_OF_PAGES - 1)) * 100}
          />
        </Box>
      </div>
      <h4>{JSON.stringify(response)}</h4>
      <h4>{pageData.type}</h4>
      {pageData.options.map((questionOption) => (
        <h4>{JSON.stringify(questionOption)}</h4>
      ))}
    </div>
  );
}

export default QuestionBlock;
