import PulseLoader from "react-spinners/PulseLoader"

export function Spinner({ loading = true }) {
  const styles = `
    display: block;
    text-align: center;
    margin: 40px auto;
  `
  return <PulseLoader color="white" loading={loading} css={styles} />
}
