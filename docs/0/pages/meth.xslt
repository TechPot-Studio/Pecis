<?xml version="1.0" encoding="UTF-8" ?>
<xsl:stylesheet version="1.0"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/meth">
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
                <div>
                    Shorthands:
                    <xsl:for-each select="shorthands">
                        <xsl:value-of select="shorthand" />
                    </xsl:for-each>

                </div>

                <br />
                <div class="subtitle">Properties</div>
                <div id="inner-body">
                    <ul class="props">
                        <xsl:choose>
                            <xsl:when test="scrap">
                                <em>
                                    Abandoned methods have no detail properties but typings file contains it =)
                                </em>
                            </xsl:when>
                            <xsl:otherwise>
                                <xsl:for-each select="props/prop">
                                    <li class="prop">
                                        <xsl:value-of select="name" />
                                        :
                                        <xsl:value-of select="type" />
                                    </li>
                                </xsl:for-each>
                            </xsl:otherwise>
                        </xsl:choose>

                    </ul>

                </div>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>
