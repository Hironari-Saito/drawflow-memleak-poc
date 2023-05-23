function url() {
  return 'http://localhost:8080/'
}

async function action(page) {
  await page.click('[id="create"]')
}

async function back(page) {
  await page.click('[id="removeNodeId"]')
}

module.exports = {url, action, back }