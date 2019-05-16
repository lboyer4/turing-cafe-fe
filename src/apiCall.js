const reservations = fetch(url)
	if (!response.ok) {
		throw new Error('can not fetch reservations')
	} else {
		return response.json()
	}