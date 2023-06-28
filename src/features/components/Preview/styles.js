import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  spanHeader: {
    fontSize: '45px',
    margin: '1rem 0 0',
  },
  contentDesc: {
    margin: '2rem 5rem 4rem',
  },
  spanDescription: {
    fontSize: '14px',
  },
  divLogo: {
    width: '150px',
  },
  logo: {
    width: '100%',
    flexShrink: 0,
  },
  divData: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    margin: '0 30px',
  },
  spanName: {
    fontWeight: 'bold',
    fontSize: '18px',
  },
  jobTitle: {
    fontSize: '14px',
    lineHeight: '22px',
  },
  infoDetails: {
    fontSize: '12px',
  },
  contentTable: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  divIcon: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '5px 0',
  },
  icon: {
    fontSize: '15px',
    marginRight: '15px',
  },
  divRow: {
    borderTop: '1px solid #000',
    width: '100%',
    maxWidth: '180px',
    margin: '10px 0',
  },
});
