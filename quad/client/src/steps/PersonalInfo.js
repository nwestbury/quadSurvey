import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import Chip from '@material-ui/core/Chip';
import Input from '@material-ui/core/Input';
import FormHelperText from '@material-ui/core/FormHelperText';

function PaymentForm(props) {
  const {data, setData} = props;

  const names = ['Afrikaans', 'Albanian', 'Amharic', 'Arabic', 'Aramaic', 'Armenian', 'Assamese', 'Aymara', 'Azerbaijani', 'Balochi', 'Bamanankan', 'Bashkort (Bashkir)', 'Basque', 'Belarusan', 'Bengali', 'Bhojpuri', 'Bislama', 'Bosnian', 'Brahui', 'Bulgarian', 'Burmese', 'Cantonese', 'Catalan', 'Cebuano', 'Chechen', 'Cherokee', 'Croatian', 'Czech', 'Dakota', 'Danish', 'Dari', 'Dholuo', 'Dutch', 'English', 'Esperanto', 'Estonian', 'Éwé', 'Finnish', 'French', 'Georgian', 'German', 'Gikuyu', 'Greek', 'Guarani', 'Gujarati', 'Haitian Creole', 'Hausa', 'Hawaiian', 'Hawaiian Creole', 'Hebrew', 'Hiligaynon', 'Hindi', 'Hungarian', 'Icelandic', 'Igbo', 'Ilocano', 'Indonesian (Bahasa Indonesia)', 'Inuit/Inupiaq', 'Irish Gaelic', 'Italian', 'Japanese', 'Jarai', 'Javanese', 'K’iche’', 'Kabyle', 'Kannada', 'Kashmiri', 'Kazakh', 'Khmer', 'KhoekhoeKorean', 'Kurdish', 'Kyrgyz', 'Lao', 'Latin', 'Latvian', 'Lingala', 'Lithuanian', 'Macedonian', 'Maithili', 'Malagasy', 'Malay (Bahasa Melayu)', 'Malayalam', 'Mandarin (Chinese)', 'Marathi', 'Mende', 'Mongolian', 'Nahuatl', 'Navajo', 'Nepali', 'Norwegian', 'Ojibwa', 'Oriya', 'Oromo', 'Pashto', 'Persian', 'Polish', 'Portuguese', 'Punjabi', 'Quechua', 'Romani', 'Romanian', 'Russian', 'Rwanda', 'Samoan', 'Sanskrit', 'Serbian', 'Shona', 'Sindhi', 'Sinhala', 'Slovak', 'Slovene', 'Somali', 'Spanish', 'Swahili', 'Swedish', 'Tachelhit', 'Tagalog', 'Tajiki', 'Tamil', 'Tatar', 'Telugu', 'Thai', 'Tibetic languages', 'Tigrigna', 'Tok Pisin', 'Turkish', 'Turkmen', 'Ukrainian', 'Urdu', 'Uyghur', 'Uzbek', 'Vietnamese', 'Warlpiri', 'Welsh', 'Wolof', 'Xhosa', 'Yakut', 'Yiddish', 'Yoruba', 'Yucatec', 'Zapotec', 'Zulu'];

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Basic Information
      </Typography>
      <React.Fragment>
        <Typography variant="h7" gutterBottom>
          Please fill out all fields.
        </Typography>
        <br></br>
      </React.Fragment>
      <Grid container spacing={24}>
        <Grid item xs={12} md={6}>
          <FormControl fullWidth>
            <InputLabel htmlFor="gender">Gender</InputLabel>
            <Select
              native
              value={data.gender}
              onChange={(e) => {
                setData('personalData', Object.assign(data, {
                  gender: e.target.value
                }))
              }}
              inputProps={{
                name: 'gender',
                id: 'gender',
              }}
            >
              <option value="" />
              <option value={"Male"}>Male</option>
              <option value={"Female"}>Female</option>
              <option value={"Other"}>Other</option>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            id="age"
            name="age"
            label="Age (in years)"
            value={data.age}
            onChange={(e) => {
              setData('personalData', Object.assign(data, {
                age: e.target.value
              }))
            }}
            type="number"
            inputProps={{
                min: "16"
            }}
            InputLabelProps={{
                shrink: true,
            }}
            fullWidth
            required
          />
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <InputLabel htmlFor="select-native-lang">Native Language(s)</InputLabel>
            <Select
              multiple
              value={data.nativeLanguages}
              onChange={(e) => {
                setData('personalData', Object.assign(data, {
                  nativeLanguages: e.target.value
                }))
              }}
              input={<Input id="select-multiple-chip" />}
              renderValue={selected => (
                <div>
                  {selected.map(value => (
                    <Chip key={value} label={value} />
                  ))}
                </div>
              )}
            >
              {names.map(name => (
                <MenuItem key={name} value={name}>
                  {name}
                </MenuItem>
              ))}
            </Select>
            <FormHelperText>Language(s) spoken natively before the age of 5</FormHelperText>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <InputLabel htmlFor="select-convo-lang">Conversational Language(s)</InputLabel>
            <Select
              multiple
              value={data.convoLanguages}
              onChange={(e) => {
                setData('personalData', Object.assign(data, {
                  convoLanguages: e.target.value
                }))
              }}
              input={<Input id="select-multiple-convo-chip" />}
              renderValue={selected => (
                <div>
                  {selected.map(value => (
                    <Chip key={value} label={value} />
                  ))}
                </div>
              )}
            >
              {names.map(name => (
                <MenuItem key={name} value={name}>
                  {name}
                </MenuItem>
              ))}
            </Select>
            <FormHelperText>Language(s) spoken conversationally after the age of 5</FormHelperText>
          </FormControl>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default PaymentForm;
