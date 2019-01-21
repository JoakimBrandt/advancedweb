var headerList = []

		document.addEventListener("DOMContentLoaded", function() {

			setupTableOfContents()

		})

		function setupTableOfContents() {

			let header2Tags = document.getElementsByTagName("h2")
			const newList = document.createElement("ul")
			const headers = document.querySelectorAll("h2")

			for (let index = 0; index < headers.length; index++) {
				var listItem = document.createElement("li")
				listItem.innerText = headers[index].innerText
				newList.appendChild(listItem)
			}

			document.getElementById("tableOfContents").append(newList)
			
		}