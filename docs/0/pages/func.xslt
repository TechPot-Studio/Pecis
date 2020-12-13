<?xml version="1.0" encoding="UTF-8" ?>
<xsl:stylesheet version="1.0"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/func">
        <html>
            <head>
                <link rel="stylesheet" href="style.css" />
                <link rel="stylesheet" href="//rsms.me/inter/inter.css" />
            </head>
            <body>
                <div class="title">
                    pecis.<xsl:value-of select="name" />
                    <xsl:if test="beta">
                        <span class="beta badge" title="This feature is still in test yet">Beta</span>
                    </xsl:if>
                    <xsl:if test="scrap">
                        <span class="scrap badge" title="This will be delete in next major version">Abandoned</span>
                    </xsl:if>
                </div>

                <hr style="border: none; border-bottom: 1px solid #000" />

                <div id="desc">
                    <xsl:value-of select="description" />
                </div>
                <div id="return">
                    Returns: <xsl:value-of select="returns" />
                </div>
                <div>
                    Shorthands:
                    <xsl:for-each select="shorthands">
                        <xsl:value-of select="shorthand" />
                    </xsl:for-each>

                </div>

                <br />
                <div class="subtitle">Usages</div>
                <div id="inner-body">
                    <xsl:for-each select="usages/usage">
                        <div class="usage">
                            <div>
                                <xsl:value-of select="definition" />
                                <span class="available-at">
                                    Added in <xsl:value-of select="avaliable" />
                                </span>
                            </div>
                            <ul id="params-parent">
                                <xsl:for-each select="params/param">
                                    <li class="param">
                                        <div class="u-name">
                                            <xsl:value-of select="name" />
                                        </div>
                                        <div class="u-type">
                                            Type: <xsl:value-of select="type" />
                                        </div>
                                        <div class="u-desc">
                                            <xsl:value-of select="description" />
                                        </div>
                                        <xsl:if test="optional = 'yes'">
                                            <div class="u-optional">
                                                Optional
                                            </div>
                                        </xsl:if>

                                    </li>
                                </xsl:for-each>
                            </ul>
                        </div>
                    </xsl:for-each>
                </div>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>
