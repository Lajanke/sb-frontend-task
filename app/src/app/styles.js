export default {
  main: {
    backgroundColor: '#fbfbfb',
    border: '1px solid #e6e6e6',
    borderBottomRightRadius: '3px',
    borderTopRightRadius: '3px',
    maxWidth: '935px',
    margin: '16px auto',
    width: 'calc(100% - 40px)',
    aspectRatio: '1.9 / 1',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    alignContent: 'stretch',
    alignItems: 'flex-start'
  },

  imageContainer: {
    order: '1',
    flex: '1 0 65%',
    alignSelf: 'center'
  },

  text: {
    order: '2',
    flex: '1 0 35%',
    alignSelf: 'flex-start',
    backgroundColor: '#fff',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flexStart',
    minHeight: '100%'
  },

  userSection: {
    order: '1',
    flex: '0 0 80px',
    alignSelf: 'flex-start',
    display: 'flex',
    flexDirection: 'row',
    marginLeft: '1em',
    alignItems: 'center'
  },

  commentsSection: {
    order: '2',
    flex: '1 0',
    alignSelf: 'flex-start',
    overflow: 'auto',
    marginLeft: '1em',
    borderTop: 'solid 1px',
    borderImage: 'linear-gradient(to right, #eeeeee 90%, transparent 50%) 100% 1',
    width: 'calc(100% - 1em)'
  },

  likesContainer: {
    order: '3',
    flex: '0 0 45px',
    alignSelf: 'flex-start',
    marginLeft: '1em',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 'calc(100% - 1em)'
  }
}
