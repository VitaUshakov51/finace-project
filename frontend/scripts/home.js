export class Home {
    constructor() {
        this.showGraphics();
    }

    static showGraphics(){

        const plusGrpaphic = document.getElementById('plusGraphic');
        const plusGraphicdata = {
            labels: [
                'Red',
                'Blue',
                'Yellow',
                'Green',
                'Orange',
            ],
            datasets: [{
                label: 'My First Dataset',
                data: [300, 50, 100,50,400],
                backgroundColor: [
                    'rgb(255, 99, 132)',
                    'rgb(54, 162, 235)',
                    'rgb(255, 205, 86)',
                    'rgba(32, 201, 151,1)',
                    'rgba(253, 126, 20, 1)',

                ],
                hoverOffset: 4
            }]
        };

        new Chart(plusGrpaphic, {
            type: 'pie',
            data: plusGraphicdata,
        });

        const minusGraphic = document.getElementById('minusGraphic');
        const minusGraphicData = {
            labels: [
                'Red',
                'Blue',
                'Yellow',
                'Green',
                'Orange',
            ],
            datasets: [{
                label: 'My First Dataset',
                data: [300, 50, 100,50,400],
                backgroundColor: [
                    'rgb(255, 99, 132)',
                    'rgb(54, 162, 235)',
                    'rgb(255, 205, 86)',
                    'rgba(32, 201, 151,1)',
                    'rgba(253, 126, 20, 1)',

                ],
                hoverOffset: 4
            }]
        };

        new Chart(minusGraphic, {
            type: 'pie',
            data: minusGraphicData,
        });
    };
}