import { Controller, Get } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { DashboardService } from './dashboard.service';
import { CategorizedSeriesResponseDto, MetricsResponseDto, TopProductsResponseDto } from './dto/responses.dto';

@ApiTags('dashboard')
@Controller('dashboard')
export class DashboardController {
    constructor(private readonly svc: DashboardService) {}

    @Get('metrics')               @ApiOkResponse({ type: MetricsResponseDto })            metrics()  { return this.svc.metrics(); }
    @Get('revenue')               @ApiOkResponse({ type: CategorizedSeriesResponseDto })  revenue()  { return this.svc.revenue(); }
    @Get('customer-satisfaction') @ApiOkResponse({ type: CategorizedSeriesResponseDto })  csat()     { return this.svc.customerSatisfaction(); }
    @Get('visitor-insights')      @ApiOkResponse({ type: CategorizedSeriesResponseDto })  visitors() { return this.svc.visitorInsights(); }
    @Get('top-products')          @ApiOkResponse({ type: TopProductsResponseDto })        products() { return this.svc.topProducts(); }
}
