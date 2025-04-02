import { makeStyles } from '@rneui/themed';

export const useStyles = makeStyles((theme) => ({
  inputContainer: {
    marginBottom: 16,
  },
  label: {},
  input: {
    height: 50,
    borderColor: theme.colors.grey4,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 16,
    backgroundColor: theme.colors.white,
  },
  inputError: {
    borderColor: theme.colors.error,
  },
  errorText: {
    color: theme.colors.error,
    fontSize: 12,
    marginTop: 4,
  },
}));
